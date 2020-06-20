declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Rabbit extends org.bukkit.entity.Animals {
                /**
                 * @return The type of rabbit.
                 */
                // @ts-ignore
                getRabbitType(): org.bukkit.entity.Rabbit.Type
                /**
                 * @param type Sets the type of rabbit for this entity.
                 */
                // @ts-ignore
                setRabbitType(type: org.bukkit.entity.Rabbit.Type): void
            }
        }
    }
}
