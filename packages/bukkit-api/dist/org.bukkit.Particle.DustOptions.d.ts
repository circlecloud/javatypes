declare namespace org {
    namespace bukkit {
        namespace Particle {
            /**
             * Options which can be applied to redstone dust particles - a particle
             * color and size.
             */
            // @ts-ignore
            class DustOptions extends java.lang.Object {
                // @ts-ignore
                constructor(color: org.bukkit.Color, size: number /*float*/)
                /**
                 * The color of the particles to be displayed.
                 * @return particle color
                 */
                // @ts-ignore
                public getColor(): org.bukkit.Color
                /**
                 * Relative size of the particle.
                 * @return relative particle size
                 */
                // @ts-ignore
                public getSize(): number /*float*/
            }
        }
    }
}
