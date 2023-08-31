import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS, Task } from "@prisma/client";
import { cookies } from "next/headers";
import React from "react";
import { Card } from "./Card";
import Button from "./Button";
import { delay } from "@/lib/async";

const getTasks = async () => {
  await delay(5000);
  const user = await getUserFromCookie(cookies());
  const tasks = await db.task.findMany({
    where: {
      ownerId: user?.id,
      NOT: { status: TASK_STATUS.COMPLETED, deleted: false },
    },
    take: 5,
    orderBy: { due: "asc" },
  });
  return tasks;
};

export const TaskCard = async ({
  title,
  tasks,
}: {
  title: string;
  tasks?: Task[];
}) => {
  const tasksData = tasks || (await getTasks());
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <Button intent="text" className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      <div>
        {tasksData && tasksData.length ? (
          <div>
            {tasksData.map((task) => (
              <div className="py-2 " key={task.id}>
                <div>
                  <span className="text-gray-800">{task.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">
                    {task.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no tasks</div>
        )}
      </div>
    </Card>
  );
};
