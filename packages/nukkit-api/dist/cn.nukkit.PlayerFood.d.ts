declare namespace cn {
    namespace nukkit {
        /**
         * Created by funcraft on 2015/11/11.
         */
        // @ts-ignore
        class PlayerFood extends java.lang.Object {
            // @ts-ignore
            constructor(player: cn.nukkit.Player, foodLevel: number /*int*/, foodSaturationLevel: number /*float*/)
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player
            // @ts-ignore
            public getLevel(): number /*int*/
            // @ts-ignore
            public getMaxLevel(): number /*int*/
            // @ts-ignore
            public setLevel(foodLevel: number /*int*/): void
            // @ts-ignore
            public setLevel(foodLevel: number /*int*/, saturationLevel: number /*float*/): void
            // @ts-ignore
            public getFoodSaturationLevel(): number /*float*/
            // @ts-ignore
            public setFoodSaturationLevel(fsl: number /*float*/): void
            // @ts-ignore
            public useHunger(): void
            // @ts-ignore
            public useHunger(amount: number /*int*/): void
            // @ts-ignore
            public addFoodLevel(food: cn.nukkit.item.food.Food): void
            // @ts-ignore
            public addFoodLevel(foodLevel: number /*int*/, fsl: number /*float*/): void
            // @ts-ignore
            public sendFoodLevel(): void
            // @ts-ignore
            public reset(): void
            // @ts-ignore
            public sendFoodLevel(foodLevel: number /*int*/): void
            // @ts-ignore
            public update(tickDiff: number /*int*/): void
            // @ts-ignore
            public updateFoodExpLevel(use: number /*double*/): void
            /**
             * @deprecated use {#link #setLevel(int)} instead
             * @param foodLevel level
             */
            // @ts-ignore
            public setFoodLevel(foodLevel: number /*int*/): void
            /**
             * @deprecated use {#link #setLevel(int, float)} instead
             * @param foodLevel level
             * @param saturationLevel saturation
             */
            // @ts-ignore
            public setFoodLevel(foodLevel: number /*int*/, saturationLevel: number /*float*/): void
        }
    }
}
