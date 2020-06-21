declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace level {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class LevelEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level)
                    // @ts-ignore
                    public getLevel(): cn.nukkit.level.Level
                }
            }
        }
    }
}
