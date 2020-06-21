declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    // @ts-ignore
                    class DefaultMethodVisitor extends java.lang.Object implements com.rabbitmq.client.impl.AMQImpl.MethodVisitor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Start): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.StartOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Secure): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.SecureOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Tune): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.TuneOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Open): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.OpenOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Close): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.CloseOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Blocked): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.Unblocked): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.UpdateSecret): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Connection.UpdateSecretOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.Open): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.OpenOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.Flow): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.FlowOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.Close): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Channel.CloseOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Access.Request): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Access.RequestOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.Declare): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.Delete): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.DeleteOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.Bind): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.BindOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.Unbind): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Exchange.UnbindOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.Declare): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.DeclareOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.Bind): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.BindOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.Purge): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.PurgeOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.Delete): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.DeleteOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.Unbind): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Queue.UnbindOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Qos): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.QosOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Consume): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.ConsumeOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Cancel): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.CancelOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Publish): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Return): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Deliver): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Get): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.GetOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.GetEmpty): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Ack): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Reject): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.RecoverAsync): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Recover): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.RecoverOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Basic.Nack): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.Select): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.SelectOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.Commit): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.CommitOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.Rollback): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Tx.RollbackOk): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Confirm.Select): any
                        // @ts-ignore
                        public visit(x: com.rabbitmq.client.impl.AMQImpl.Confirm.SelectOk): any
                    }
                }
            }
        }
    }
}
