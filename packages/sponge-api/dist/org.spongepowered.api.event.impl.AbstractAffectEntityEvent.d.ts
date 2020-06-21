declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractAffectEntityEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.AffectEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        entities: java.util.List<org.spongepowered.api.entity.Entity> | Array<org.spongepowered.api.entity.Entity>
                        // @ts-ignore
                        entitySnapshots: java.util.List<org.spongepowered.api.entity.EntitySnapshot> | Array<org.spongepowered.api.entity.EntitySnapshot>
                        // @ts-ignore
                        public getEntitySnapshots(): Array<org.spongepowered.api.entity.EntitySnapshot>
                    }
                }
            }
        }
    }
}
