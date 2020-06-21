declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Item extends java.lang.Object implements java.lang.Cloneable, cn.nukkit.block.BlockID, cn.nukkit.item.ItemID {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                // @ts-ignore
                static UNKNOWN_STR: java.lang.String | string
                // @ts-ignore
                public static list: java.lang.Class<any>[]
                // @ts-ignore
                block: cn.nukkit.block.Block
                // @ts-ignore
                readonly id: number /*int*/
                // @ts-ignore
                meta: number /*int*/
                // @ts-ignore
                public count: number /*int*/
                // @ts-ignore
                durability: number /*int*/
                // @ts-ignore
                name: java.lang.String | string
                // @ts-ignore
                public hasMeta(): boolean
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public static init(): void
                // @ts-ignore
                public static clearCreativeItems(): void
                // @ts-ignore
                public static getCreativeItems(): java.util.ArrayList<cn.nukkit.item.Item>
                // @ts-ignore
                public static addCreativeItem(item: cn.nukkit.item.Item): void
                // @ts-ignore
                public static removeCreativeItem(item: cn.nukkit.item.Item): void
                // @ts-ignore
                public static isCreativeItem(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public static getCreativeItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public static getCreativeItemIndex(item: cn.nukkit.item.Item): number /*int*/
                // @ts-ignore
                public static get(id: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public static get(id: number /*int*/, meta: java.lang.Integer | number): cn.nukkit.item.Item
                // @ts-ignore
                public static get(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public static get(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, tags: number /*byte*/[]): cn.nukkit.item.Item
                // @ts-ignore
                public static fromString(str: java.lang.String | string): cn.nukkit.item.Item
                // @ts-ignore
                public static fromJson(data: java.util.Map<java.lang.String | string, java.lang.Object | any>): cn.nukkit.item.Item
                // @ts-ignore
                public static fromStringMultiple(str: java.lang.String | string): cn.nukkit.item.Item[]
                // @ts-ignore
                public setCompoundTag(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item
                // @ts-ignore
                public setCompoundTag(tags: number /*byte*/[]): cn.nukkit.item.Item
                // @ts-ignore
                public getCompoundTag(): number /*byte*/[]
                // @ts-ignore
                public hasCompoundTag(): boolean
                // @ts-ignore
                public hasCustomBlockData(): boolean
                // @ts-ignore
                public clearCustomBlockData(): cn.nukkit.item.Item
                // @ts-ignore
                public setCustomBlockData(compoundTag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item
                // @ts-ignore
                public getCustomBlockData(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public hasEnchantments(): boolean
                // @ts-ignore
                public getEnchantment(id: number /*int*/): cn.nukkit.item.enchantment.Enchantment
                // @ts-ignore
                public getEnchantment(id: number /*short*/): cn.nukkit.item.enchantment.Enchantment
                // @ts-ignore
                public addEnchantment(...enchantments: cn.nukkit.item.enchantment.Enchantment[]): void
                // @ts-ignore
                public getEnchantments(): cn.nukkit.item.enchantment.Enchantment[]
                // @ts-ignore
                public hasCustomName(): boolean
                // @ts-ignore
                public getCustomName(): string
                // @ts-ignore
                public setCustomName(name: java.lang.String | string): cn.nukkit.item.Item
                // @ts-ignore
                public clearCustomName(): cn.nukkit.item.Item
                // @ts-ignore
                public getLore(): string[]
                // @ts-ignore
                public setLore(...lines: java.lang.String[] | string[]): cn.nukkit.item.Item
                // @ts-ignore
                public getNamedTagEntry(name: java.lang.String | string): cn.nukkit.nbt.tag.Tag
                // @ts-ignore
                public getNamedTag(): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public setNamedTag(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item
                // @ts-ignore
                public clearNamedTag(): cn.nukkit.item.Item
                // @ts-ignore
                public static parseCompoundTag(tag: number /*byte*/[]): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public writeCompoundTag(tag: cn.nukkit.nbt.tag.CompoundTag): number /*byte*/[]
                // @ts-ignore
                public getCount(): number /*int*/
                // @ts-ignore
                public setCount(count: number /*int*/): void
                // @ts-ignore
                public isNull(): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public canBePlaced(): boolean
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getDamage(): number /*int*/
                // @ts-ignore
                public setDamage(meta: java.lang.Integer | number): void
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public getFuelTime(): number
                // @ts-ignore
                public useOn(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                public useOn(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public isTool(): boolean
                // @ts-ignore
                public getMaxDurability(): number /*int*/
                // @ts-ignore
                public getTier(): number /*int*/
                // @ts-ignore
                public isPickaxe(): boolean
                // @ts-ignore
                public isAxe(): boolean
                // @ts-ignore
                public isSword(): boolean
                // @ts-ignore
                public isShovel(): boolean
                // @ts-ignore
                public isHoe(): boolean
                // @ts-ignore
                public isShears(): boolean
                // @ts-ignore
                public isArmor(): boolean
                // @ts-ignore
                public isHelmet(): boolean
                // @ts-ignore
                public isChestplate(): boolean
                // @ts-ignore
                public isLeggings(): boolean
                // @ts-ignore
                public isBoots(): boolean
                // @ts-ignore
                public getEnchantAbility(): number /*int*/
                // @ts-ignore
                public getAttackDamage(): number /*int*/
                // @ts-ignore
                public getArmorPoints(): number /*int*/
                // @ts-ignore
                public getToughness(): number /*int*/
                // @ts-ignore
                public isUnbreakable(): boolean
                // @ts-ignore
                public onUse(player: cn.nukkit.Player, ticksUsed: number /*int*/): boolean
                // @ts-ignore
                public onRelease(player: cn.nukkit.Player, ticksUsed: number /*int*/): boolean
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public getDestroySpeed(block: cn.nukkit.block.Block, player: cn.nukkit.Player): number /*int*/
                // @ts-ignore
                public onActivate(level: cn.nukkit.level.Level, player: cn.nukkit.Player, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/): boolean
                /**
                 * Called when a player uses the item on air, for example throwing a projectile.
                 * Returns whether the item was changed, for example count decrease or durability change.
                 * @param player player
                 * @param directionVector direction
                 * @return item changed
                 */
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public equals(item: java.lang.Object | any): boolean
                // @ts-ignore
                public equals(item: cn.nukkit.item.Item, checkDamage: boolean): boolean
                // @ts-ignore
                public equals(item: cn.nukkit.item.Item, checkDamage: boolean, checkCompound: boolean): boolean
                /**
                 * Returns whether the specified item stack has the same ID, damage, NBT and count as this item stack.
                 * @param other item
                 * @return equal
                 */
                // @ts-ignore
                public equalsExact(other: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item, checkDamage: boolean): boolean
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item, checkDamage: boolean, checkCompound: boolean): boolean
                // @ts-ignore
                public clone(): cn.nukkit.item.Item
            }
        }
    }
}
