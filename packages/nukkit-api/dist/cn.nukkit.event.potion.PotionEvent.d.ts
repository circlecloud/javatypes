declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace potion {
                /**
                 * Created by Snake1999 on 2016/1/12.
                 * Package cn.nukkit.event.potion in project nukkit
                 */
                // @ts-ignore
                abstract class PotionEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(potion: cn.nukkit.potion.Potion)
                    // @ts-ignore
                    public getPotion(): cn.nukkit.potion.Potion
                    // @ts-ignore
                    public setPotion(potion: cn.nukkit.potion.Potion): void
                }
            }
        }
    }
}
