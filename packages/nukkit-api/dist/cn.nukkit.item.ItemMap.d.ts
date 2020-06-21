declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created by CreeperFace on 18.3.2017.
             */
            // @ts-ignore
            class ItemMap extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public static mapCount: number /*int*/
                // @ts-ignore
                public setImage(file: java.io.File): void
                // @ts-ignore
                public setImage(image: java.awt.image.BufferedImage): void
                // @ts-ignore
                loadImageFromNBT(): java.awt.image.BufferedImage
                // @ts-ignore
                public getMapId(): number /*long*/
                // @ts-ignore
                public sendImage(p: cn.nukkit.Player): void
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
            }
        }
    }
}
