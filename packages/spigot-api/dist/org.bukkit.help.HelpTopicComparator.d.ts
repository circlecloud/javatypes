declare namespace org {
    namespace bukkit {
        namespace help {
            /**
             * Used to impose a custom total ordering on help topics.
             * <p>
             * All topics are listed in alphabetic order, but topics that start with a
             * slash come after topics that don't.
             */
            // @ts-ignore
            class HelpTopicComparator extends java.lang.Object implements java.util.Comparator<org.bukkit.help.HelpTopic> {
                // @ts-ignore
                public static topicNameComparatorInstance(): org.bukkit.help.HelpTopicComparator.TopicNameComparator
                // @ts-ignore
                public static helpTopicComparatorInstance(): org.bukkit.help.HelpTopicComparator
                // @ts-ignore
                public compare(lhs: org.bukkit.help.HelpTopic, rhs: org.bukkit.help.HelpTopic): number /*int*/
            }
        }
    }
}
