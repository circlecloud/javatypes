declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * 表达一个任务的类。<br>A class that describes a task.
             * <p>一个任务可以被Nukkit服务器立即，延时，循环或延时循环执行。参见:{@link ServerScheduler}<br>
             * A task can be executed by Nukkit server with a/an express, delay, repeat or delay&amp;repeat.
             * See:{@link ServerScheduler}</p>
             * <p>对于插件开发者，为确保自己任务能够在安全的情况下执行（比如：在插件被禁用时不执行），
             * 建议让任务继承{@link PluginTask}类而不是这个类。<br>
             * For plugin developers: To make sure your task will only be executed in the case of safety
             * (such as: prevent this task from running if its owner plugin is disabled),
             * it's suggested to use {@link PluginTask} instead of extend this class.</p>
             * @author MagicDroidX(code) # Nukkit Project
             * @author 粉鞋大妈(javadoc) # Nukkit Project
             * @since Nukkit 1.0 | Nukkit API 1.0.0
             */
            // @ts-ignore
            abstract class Task extends java.lang.Object implements java.lang.Runnable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getHandler(): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public getTaskId(): number /*int*/
                // @ts-ignore
                public setHandler(taskHandler: cn.nukkit.scheduler.TaskHandler): void
                /**
                 * 这个任务被执行时，会调用的过程。<br>
                 * What will be called when the task is executed.
                 * @param currentTick 服务器从开始运行到现在所经过的tick数，20ticks = 1秒，1tick = 0.05秒。<br>
                 *                     The elapsed tick count from the server is started. 20ticks = 1second, 1tick = 0.05second.
                 * @since Nukkit 1.0 | Nukkit API 1.0.0
                 */
                // @ts-ignore
                public abstract onRun(currentTick: number /*int*/): void
                // @ts-ignore
                public run(): void
                // @ts-ignore
                public onCancel(): void
                // @ts-ignore
                public cancel(): void
            }
        }
    }
}
