declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace EnderDragon {
                /**
                 * Represents a phase or action that an Ender Dragon can perform.
                 */
                // @ts-ignore
                class Phase extends java.lang.Enum<org.bukkit.entity.EnderDragon.Phase> {
                    /**
                     * The dragon will circle outside the ring of pillars if ender
                     * crystals remain or inside the ring if not.
                     */
                    // @ts-ignore
                    public static readonly CIRCLING: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will fly towards a targeted player and shoot a
                     * fireball when within 64 blocks.
                     */
                    // @ts-ignore
                    public static readonly STRAFING: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will fly towards the empty portal (approaching
                     * from the other side, if applicable).
                     */
                    // @ts-ignore
                    public static readonly FLY_TO_PORTAL: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will land on on the portal. If the dragon is not near
                     * the portal, it will fly to it before mounting.
                     */
                    // @ts-ignore
                    public static readonly LAND_ON_PORTAL: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will leave the portal.
                     */
                    // @ts-ignore
                    public static readonly LEAVE_PORTAL: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will attack with dragon breath at its current location.
                     */
                    // @ts-ignore
                    public static readonly BREATH_ATTACK: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will search for a player to attack with dragon breath.
                     * If no player is close enough to the dragon for 5 seconds, the
                     * dragon will charge at a player within 150 blocks or will take off
                     * and begin circling if no player is found.
                     */
                    // @ts-ignore
                    public static readonly SEARCH_FOR_BREATH_ATTACK_TARGET: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will roar before performing a breath attack.
                     */
                    // @ts-ignore
                    public static readonly ROAR_BEFORE_ATTACK: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will charge a player.
                     */
                    // @ts-ignore
                    public static readonly CHARGE_PLAYER: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will fly to the vicinity of the portal and die.
                     */
                    // @ts-ignore
                    public static readonly DYING: org.bukkit.entity.EnderDragon.Phase
                    /**
                     * The dragon will hover at its current location, not performing any actions.
                     */
                    // @ts-ignore
                    public static readonly HOVER: org.bukkit.entity.EnderDragon.Phase
                    // @ts-ignore
                    public static values(): org.bukkit.entity.EnderDragon.Phase[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.entity.EnderDragon.Phase
                }
            }
        }
    }
}
