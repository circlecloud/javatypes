declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ArmorStand extends org.bukkit.entity.LivingEntity {
                /**
                 * Returns the item the armor stand is currently holding.
                 * @return the held item
                 * @deprecated prefer {#link EntityEquipment#getItemInHand()}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                getItemInHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the armor stand is currently holding.
                 * @param item the item to hold
                 * @deprecated prefer
                 *  {#link EntityEquipment#setItemInHand(org.bukkit.inventory.ItemStack)}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                setItemInHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the item currently being worn by the armor stand on its feet.
                 * @return the worn item
                 * @deprecated prefer {#link EntityEquipment#getBoots()}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                getBoots(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item currently being worn by the armor stand on its feet.
                 * @param item the item to wear
                 * @deprecated prefer
                 *  {#link EntityEquipment#setBoots(org.bukkit.inventory.ItemStack)}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                setBoots(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the item currently being worn by the armor stand on its legs.
                 * @return the worn item
                 * @deprecated prefer {#link EntityEquipment#getLeggings()}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                getLeggings(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item currently being worn by the armor stand on its legs.
                 * @param item the item to wear
                 * @deprecated prefer
                 *  {#link EntityEquipment#setLeggings(org.bukkit.inventory.ItemStack)}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                setLeggings(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the item currently being worn by the armor stand on its chest.
                 * @return the worn item
                 * @deprecated prefer {#link EntityEquipment#getChestplate()}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                getChestplate(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item currently being worn by the armor stand on its chest.
                 * @param item the item to wear
                 * @deprecated prefer
                 *  {#link EntityEquipment#setChestplate(org.bukkit.inventory.ItemStack)}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                setChestplate(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the item currently being worn by the armor stand on its head.
                 * @return the worn item
                 * @deprecated prefer {#link EntityEquipment#getHelmet()}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                getHelmet(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item currently being worn by the armor stand on its head.
                 * @param item the item to wear
                 * @deprecated prefer
                 *  {#link EntityEquipment#setHelmet(org.bukkit.inventory.ItemStack)}
                 * @see #getEquipment()
                 */
                // @ts-ignore
                setHelmet(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the armor stand's body's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getBodyPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's body's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setBodyPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns the armor stand's left arm's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getLeftArmPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's left arm's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setLeftArmPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns the armor stand's right arm's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getRightArmPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's right arm's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setRightArmPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns the armor stand's left leg's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getLeftLegPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's left leg's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setLeftLegPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns the armor stand's right leg's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getRightLegPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's right leg's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setRightLegPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns the armor stand's head's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @return the current pose
                 */
                // @ts-ignore
                getHeadPose(): org.bukkit.util.EulerAngle
                /**
                 * Sets the armor stand's head's current pose as a
                 * {@link org.bukkit.util.EulerAngle}.
                 * @param pose the current pose
                 */
                // @ts-ignore
                setHeadPose(pose: org.bukkit.util.EulerAngle): void
                /**
                 * Returns whether the armor stand has a base plate.
                 * @return whether it has a base plate
                 */
                // @ts-ignore
                hasBasePlate(): boolean
                /**
                 * Sets whether the armor stand has a base plate.
                 * @param basePlate whether is has a base plate
                 */
                // @ts-ignore
                setBasePlate(basePlate: boolean): void
                /**
                 * Returns whether the armor stand should be visible or not.
                 * @return whether the stand is visible or not
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Sets whether the armor stand should be visible or not.
                 * @param visible whether the stand is visible or not
                 */
                // @ts-ignore
                setVisible(visible: boolean): void
                /**
                 * Returns whether this armor stand has arms.
                 * @return whether this has arms or not
                 */
                // @ts-ignore
                hasArms(): boolean
                /**
                 * Sets whether this armor stand has arms.
                 * @param arms whether this has arms or not
                 */
                // @ts-ignore
                setArms(arms: boolean): void
                /**
                 * Returns whether this armor stand is scaled down.
                 * @return whether this is scaled down
                 */
                // @ts-ignore
                isSmall(): boolean
                /**
                 * Sets whether this armor stand is scaled down.
                 * @param small whether this is scaled down
                 */
                // @ts-ignore
                setSmall(small: boolean): void
                /**
                 * Returns whether this armor stand is a marker, meaning it has a very small
                 * collision box.
                 * @return whether this is a marker
                 */
                // @ts-ignore
                isMarker(): boolean
                /**
                 * Sets whether this armor stand is a marker, meaning it has a very small
                 * collision box.
                 * @param marker whether this is a marker
                 */
                // @ts-ignore
                setMarker(marker: boolean): void
            }
        }
    }
}
