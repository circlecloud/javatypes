declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class Command extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, usageMessage: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, usageMessage: java.lang.String | string, aliases: java.lang.String[] | string[])
                // @ts-ignore
                commandData: cn.nukkit.command.data.CommandData
                // @ts-ignore
                description: java.lang.String | string
                // @ts-ignore
                usageMessage: java.lang.String | string
                // @ts-ignore
                commandParameters: java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandParameter[]>
                // @ts-ignore
                public timing: co.aikar.timings.Timing
                /**
                 * Returns an CommandData containing command data
                 * @return CommandData
                 */
                // @ts-ignore
                public getDefaultCommandData(): cn.nukkit.command.data.CommandData
                // @ts-ignore
                public getCommandParameters(key: java.lang.String | string): cn.nukkit.command.data.CommandParameter[]
                // @ts-ignore
                public getCommandParameters(): java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandParameter[]>
                // @ts-ignore
                public setCommandParameters(commandParameters: java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandParameter[]>): void
                // @ts-ignore
                public addCommandParameters(key: java.lang.String | string, parameters: cn.nukkit.command.data.CommandParameter[]): void
                /**
                 * Generates modified command data for the specified player
                 * for AvailableCommandsPacket.
                 * @param player player
                 * @return CommandData|null
                 */
                // @ts-ignore
                public generateCustomCommandData(player: cn.nukkit.Player): cn.nukkit.command.data.CommandDataVersions
                // @ts-ignore
                public getOverloads(): java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandOverload>
                // @ts-ignore
                public abstract execute(sender: cn.nukkit.command.CommandSender, commandLabel: java.lang.String | string, args: java.lang.String[] | string[]): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getPermission(): string
                // @ts-ignore
                public setPermission(permission: java.lang.String | string): void
                // @ts-ignore
                public testPermission(target: cn.nukkit.command.CommandSender): boolean
                // @ts-ignore
                public testPermissionSilent(target: cn.nukkit.command.CommandSender): boolean
                // @ts-ignore
                public getLabel(): string
                // @ts-ignore
                public setLabel(name: java.lang.String | string): boolean
                // @ts-ignore
                public register(commandMap: cn.nukkit.command.CommandMap): boolean
                // @ts-ignore
                public unregister(commandMap: cn.nukkit.command.CommandMap): boolean
                // @ts-ignore
                public allowChangesFrom(commandMap: cn.nukkit.command.CommandMap): boolean
                // @ts-ignore
                public isRegistered(): boolean
                // @ts-ignore
                public getAliases(): string[]
                // @ts-ignore
                public getPermissionMessage(): string
                // @ts-ignore
                public getDescription(): string
                // @ts-ignore
                public getUsage(): string
                // @ts-ignore
                public setAliases(aliases: java.lang.String[] | string[]): void
                // @ts-ignore
                public setDescription(description: java.lang.String | string): void
                // @ts-ignore
                public setPermissionMessage(permissionMessage: java.lang.String | string): void
                // @ts-ignore
                public setUsage(usageMessage: java.lang.String | string): void
                // @ts-ignore
                public static generateDefaultData(): cn.nukkit.command.data.CommandData
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: java.lang.String | string): void
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: java.lang.String | string, sendToSource: boolean): void
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: cn.nukkit.lang.TextContainer): void
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: cn.nukkit.lang.TextContainer, sendToSource: boolean): void
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
