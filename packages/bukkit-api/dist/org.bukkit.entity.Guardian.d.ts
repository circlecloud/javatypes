declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Guardian extends org.bukkit.entity.Monster {
                /**
                 * Check if the Guardian is an elder Guardian
                 * @return true if the Guardian is an Elder Guardian, false if not
                 * @deprecated should check if instance of {#link ElderGuardian}.
                 */
                // @ts-ignore
                isElder(): boolean
                /**
                 * @param shouldBeElder shouldBeElder
                 * @deprecated Must spawn a new {#link ElderGuardian}.
                 */
                // @ts-ignore
                setElder(shouldBeElder: boolean): void
            }
        }
    }
}
