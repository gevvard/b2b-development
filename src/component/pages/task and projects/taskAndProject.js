import React from 'react';
import css from "./taskandProject.module.scss"
const TaskAndProject = () => {
  return (
    <div className={css.taskContainer} >
      <div className={css.taskInfo} >
        <h1 className={css.taskInfoTitle} >Tasks and Projects</h1>
        <p className={css.taskInformation} >Put things in order, work in a mode convenient for you</p>
        <div>
          <h2>Effective project work practices</h2>
          <p>Choose from Kanban, Gantt Chart or classic lists. Keep a task <br/>
            calendar, keep track of deadlines, or create your own execution <br/>
            plan. Scrum helps you manage your projects.</p>
        </div>
        <div>
          <h2>Access to tasks</h2>
          <p>Distribute roles in tasks - appoint directors, executors, <br/>
            co-executors and observers. Set up access rights to tasks and manage them: <br/>
            setting, changing the deadline, delegation, etc.</p>
        </div>
        <div>
          <h2>Automation in tasks and projects</h2>
          <p>Set standard tasks in one click from templates. Use project  <br/>
            templates, with all nested tasks and owners, to instantly deploy <br/>
            new projects. Robots for sending letters, changing status and <br/>
            responsible will help speed up work and do more.</p>
        </div>
        <div className={css.btnContainer} >
          <button>ORDER SET UP</button>
        </div>
      </div>
      <div className={css.taskImg} >
        <img src={"https://cdn-ru.bitrix24.ru/b6881111/landing/a5c/a5cc224c5124117cb187f5bb6a47f2c2/img_tools_03_1x.png"} />
      </div>
    </div>
  );
};

export default TaskAndProject;