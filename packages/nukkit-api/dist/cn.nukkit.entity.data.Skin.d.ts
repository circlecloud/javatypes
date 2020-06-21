declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class Skin extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly SINGLE_SKIN_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly DOUBLE_SKIN_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly SKIN_128_64_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly SKIN_128_128_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly GEOMETRY_CUSTOM: java.lang.String | string
                    // @ts-ignore
                    public static readonly GEOMETRY_CUSTOM_SLIM: java.lang.String | string
                    // @ts-ignore
                    public isValid(): boolean
                    // @ts-ignore
                    public getSkinData(): cn.nukkit.utils.SerializedImage
                    // @ts-ignore
                    public getSkinId(): string
                    // @ts-ignore
                    public setSkinId(skinId: java.lang.String | string): void
                    // @ts-ignore
                    public generateSkinId(name: java.lang.String | string): void
                    // @ts-ignore
                    public setSkinData(skinData: number /*byte*/[]): void
                    // @ts-ignore
                    public setSkinData(image: java.awt.image.BufferedImage): void
                    // @ts-ignore
                    public setSkinData(skinData: cn.nukkit.utils.SerializedImage): void
                    // @ts-ignore
                    public setSkinResourcePatch(skinResourcePatch: java.lang.String | string): void
                    // @ts-ignore
                    public setGeometryName(geometryName: java.lang.String | string): void
                    // @ts-ignore
                    public getSkinResourcePatch(): string
                    // @ts-ignore
                    public getCapeData(): cn.nukkit.utils.SerializedImage
                    // @ts-ignore
                    public getCapeId(): string
                    // @ts-ignore
                    public setCapeId(capeId: java.lang.String | string): void
                    // @ts-ignore
                    public setCapeData(capeData: number /*byte*/[]): void
                    // @ts-ignore
                    public setCapeData(image: java.awt.image.BufferedImage): void
                    // @ts-ignore
                    public setCapeData(capeData: cn.nukkit.utils.SerializedImage): void
                    // @ts-ignore
                    public getGeometryData(): string
                    // @ts-ignore
                    public setGeometryData(geometryData: java.lang.String | string): void
                    // @ts-ignore
                    public getAnimationData(): string
                    // @ts-ignore
                    public setAnimationData(animationData: java.lang.String | string): void
                    // @ts-ignore
                    public getAnimations(): Array<cn.nukkit.utils.SkinAnimation>
                    // @ts-ignore
                    public isPremium(): boolean
                    // @ts-ignore
                    public setPremium(premium: boolean): void
                    // @ts-ignore
                    public isPersona(): boolean
                    // @ts-ignore
                    public setPersona(persona: boolean): void
                    // @ts-ignore
                    public isCapeOnClassic(): boolean
                    // @ts-ignore
                    public setCapeOnClassic(capeOnClassic: boolean): void
                    // @ts-ignore
                    public getFullSkinId(): string
                }
            }
        }
    }
}
