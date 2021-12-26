declare namespace io {
    namespace lumine {
        namespace utils {
            namespace worlds {
                // @ts-ignore
                class VoidWorldGenerator extends ChunkGenerator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getDefaultPopulators(world: World): Array<BlockPopulator>
                    // @ts-ignore
                    public canSpawn(world: World, x: number /*int*/, z: number /*int*/): boolean
                    // @ts-ignore
                    public xyzToByte(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    public generate(world: World, rand: java.util.Random, chunkx: number /*int*/, chunkz: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    public getFixedSpawnLocation(world: World, random: java.util.Random): Location
                }
            }
        }
    }
}
