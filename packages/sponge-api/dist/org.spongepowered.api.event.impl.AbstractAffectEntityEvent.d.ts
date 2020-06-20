declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    class AbstractAffectEntityEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.AffectEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        entities: Array<org.spongepowered.api.entity.Entity>
                        // @ts-ignore
                        entitySnapshots: Array<org.spongepowered.api.entity.EntitySnapshot>
                        // @ts-ignore
                        getEntitySnapshots(): java.util.List<org.spongepowered.api.entity.EntitySnapshot>
                    }
                }
            }
        }
    }
}
