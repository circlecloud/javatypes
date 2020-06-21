declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace score {
                    // @ts-ignore
                    class Scoreboard extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getObjectives(): Array<net.md_5.bungee.api.score.Objective>
                        // @ts-ignore
                        public getScores(): Array<net.md_5.bungee.api.score.Score>
                        // @ts-ignore
                        public getTeams(): Array<net.md_5.bungee.api.score.Team>
                        // @ts-ignore
                        public addObjective(objective: net.md_5.bungee.api.score.Objective): void
                        // @ts-ignore
                        public addScore(score: net.md_5.bungee.api.score.Score): void
                        // @ts-ignore
                        public getScore(name: java.lang.String | string): net.md_5.bungee.api.score.Score
                        // @ts-ignore
                        public addTeam(team: net.md_5.bungee.api.score.Team): void
                        // @ts-ignore
                        public getTeam(name: java.lang.String | string): net.md_5.bungee.api.score.Team
                        // @ts-ignore
                        public getObjective(name: java.lang.String | string): net.md_5.bungee.api.score.Objective
                        // @ts-ignore
                        public removeObjective(objectiveName: java.lang.String | string): void
                        // @ts-ignore
                        public removeScore(scoreName: java.lang.String | string): void
                        // @ts-ignore
                        public removeTeam(teamName: java.lang.String | string): void
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Unique name for this scoreboard.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Position of this scoreboard.
                         */
                        // @ts-ignore
                        public getPosition(): net.md_5.bungee.api.score.Position
                        /**
                         * Unique name for this scoreboard.
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * Position of this scoreboard.
                         */
                        // @ts-ignore
                        public setPosition(position: net.md_5.bungee.api.score.Position): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
