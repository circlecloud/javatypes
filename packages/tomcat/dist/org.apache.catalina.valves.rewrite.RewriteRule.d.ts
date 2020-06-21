declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    class RewriteRule extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        conditions: org.apache.catalina.valves.rewrite.RewriteCond[]
                        // @ts-ignore
                        pattern: java.lang.ThreadLocal<java.util.regex.Pattern>
                        // @ts-ignore
                        substitution: org.apache.catalina.valves.rewrite.Substitution
                        // @ts-ignore
                        patternString: java.lang.String | string
                        // @ts-ignore
                        substitutionString: java.lang.String | string
                        // @ts-ignore
                        flagsString: java.lang.String | string
                        /**
                         * This flag chains the current rule with the next rule (which itself
                         * can be chained with the following rule, etc.). This has the following
                         * effect: if a rule matches, then processing continues as usual, i.e.,
                         * the flag has no effect. If the rule does not match, then all following
                         * chained rules are skipped. For instance, use it to remove the ``.www''
                         * part inside a per-directory rule set when you let an external redirect
                         * happen (where the ``.www'' part should not to occur!).
                         */
                        // @ts-ignore
                        chain: boolean
                        /**
                         * This sets a cookie on the client's browser. The cookie's name is
                         * specified by NAME and the value is VAL. The domain field is the domain
                         * of the cookie, such as '.apache.org',the optional lifetime
                         * is the lifetime of the cookie in minutes, and the optional path is the
                         * path of the cookie
                         */
                        // @ts-ignore
                        cookie: boolean
                        // @ts-ignore
                        cookieName: java.lang.String | string
                        // @ts-ignore
                        cookieValue: java.lang.String | string
                        // @ts-ignore
                        cookieDomain: java.lang.String | string
                        // @ts-ignore
                        cookieLifetime: number /*int*/
                        // @ts-ignore
                        cookiePath: java.lang.String | string
                        // @ts-ignore
                        cookieSecure: boolean
                        // @ts-ignore
                        cookieHttpOnly: boolean
                        // @ts-ignore
                        cookieSubstitution: org.apache.catalina.valves.rewrite.Substitution
                        // @ts-ignore
                        cookieResult: java.lang.ThreadLocal<java.lang.String | string>
                        /**
                         * This forces a request attribute named VAR to be set to the value VAL,
                         * where VAL can contain regexp back references $N and %N which will be
                         * expanded. Multiple env flags are allowed.
                         */
                        // @ts-ignore
                        env: boolean
                        // @ts-ignore
                        envName: java.util.ArrayList<java.lang.String | string>
                        // @ts-ignore
                        envValue: java.util.ArrayList<java.lang.String | string>
                        // @ts-ignore
                        envSubstitution: java.util.ArrayList<org.apache.catalina.valves.rewrite.Substitution>
                        // @ts-ignore
                        envResult: java.util.ArrayList<java.lang.ThreadLocal<java.lang.String | string>>
                        /**
                         * This forces the current URL to be forbidden, i.e., it immediately sends
                         * back a HTTP response of 403 (FORBIDDEN). Use this flag in conjunction
                         * with appropriate RewriteConds to conditionally block some URLs.
                         */
                        // @ts-ignore
                        forbidden: boolean
                        /**
                         * This forces the current URL to be gone, i.e., it immediately sends
                         * back a HTTP response of 410 (GONE). Use this flag to mark pages which
                         * no longer exist as gone.
                         */
                        // @ts-ignore
                        gone: boolean
                        /**
                         * Host. This means this rule and its associated conditions will apply to
                         * host, allowing host rewriting (ex: redirecting internally *.foo.com to
                         * bar.foo.com).
                         */
                        // @ts-ignore
                        host: boolean
                        /**
                         * Stop the rewriting process here and don't apply any more rewriting
                         * rules. This corresponds to the Perl last command or the break command
                         * from the C language. Use this flag to prevent the currently rewritten
                         * URL from being rewritten further by following rules. For example, use
                         * it to rewrite the root-path URL ('/') to a real one, e.g., '/e/www/'.
                         */
                        // @ts-ignore
                        last: boolean
                        /**
                         * Re-run the rewriting process (starting again with the first rewriting
                         * rule). Here the URL to match is again not the original URL but the URL
                         * from the last rewriting rule. This corresponds to the Perl next
                         * command or the continue command from the C language. Use this flag to
                         * restart the rewriting process, i.e., to immediately go to the top of
                         * the loop. But be careful not to create an infinite loop!
                         */
                        // @ts-ignore
                        next: boolean
                        /**
                         * This makes the Pattern case-insensitive, i.e., there is no difference
                         * between 'A-Z' and 'a-z' when Pattern is matched against the current
                         * URL.
                         */
                        // @ts-ignore
                        nocase: boolean
                        /**
                         * This flag keeps mod_rewrite from applying the usual URI escaping rules
                         * to the result of a rewrite. Ordinarily, special characters (such as
                         * '%', '$', ';', and so on) will be escaped into their hexcode
                         * equivalents ('%25', '%24', and '%3B', respectively); this flag
                         * prevents this from being done. This allows percent symbols to appear
                         * in the output, as in
                         * RewriteRule /foo/(.*) /bar?arg=P1\%3d$1 [R,NE]
                         * which would turn '/foo/zed' into a safe request for '/bar?arg=P1=zed'.
                         */
                        // @ts-ignore
                        noescape: boolean
                        /**
                         * This flag forces the rewriting engine to skip a rewriting rule if the
                         * current request is an internal sub-request. For instance, sub-requests
                         * occur internally in Apache when mod_include tries to find out
                         * information about possible directory default files (index.xxx). On
                         * sub-requests it is not always useful and even sometimes causes a
                         * failure to if the complete set of rules are applied. Use this flag to
                         * exclude some rules. Use the following rule for your decision: whenever
                         * you prefix some URLs with CGI-scripts to force them to be processed by
                         * the CGI-script, the chance is high that you will run into problems (or
                         * even overhead) on sub-requests. In these cases, use this flag.
                         */
                        // @ts-ignore
                        nosubreq: boolean
                        /**
                         * This flag forces the rewriting engine to append a query string part in
                         * the substitution string to the existing one instead of replacing it.
                         * Use this when you want to add more data to the query string via
                         * a rewrite rule.
                         */
                        // @ts-ignore
                        qsappend: boolean
                        /**
                         * When the requested URI contains a query string, and the target URI does
                         * not, the default behavior of RewriteRule is to copy that query string
                         * to the target URI. Using the [QSD] flag causes the query string
                         * to be discarded.
                         * Using [QSD] and [QSA] together will result in [QSD] taking precedence.
                         */
                        // @ts-ignore
                        qsdiscard: boolean
                        /**
                         * Prefix Substitution with http://thishost[:thisport]/ (which makes the
                         * new URL a URI) to force a external redirection. If no code is given
                         * an HTTP response of 302 (FOUND, previously MOVED TEMPORARILY) is used.
                         * If you want to  use other response codes in the range 300-399 just
                         * specify them as a number or use one of the following symbolic names:
                         * temp (default), permanent, seeother. Use it for rules which should
                         * canonicalize the URL and give it back to the client, e.g., translate
                         * ``/~'' into ``/u/'' or always append a slash to /u/user, etc. Note:
                         * When you use this flag, make sure that the substitution field is a
                         * valid URL! If not, you are redirecting to an invalid location!
                         * And remember that this flag itself only prefixes the URL with
                         * http://thishost[:thisport]/, rewriting continues. Usually you also
                         * want to stop and do the redirection immediately. To stop the
                         * rewriting you also have to provide the 'L' flag.
                         */
                        // @ts-ignore
                        redirect: boolean
                        // @ts-ignore
                        redirectCode: number /*int*/
                        /**
                         * This flag forces the rewriting engine to skip the next num rules in
                         * sequence when the current rule matches. Use this to make pseudo
                         * if-then-else constructs: The last rule of the then-clause becomes
                         * skip=N where N is the number of rules in the else-clause.
                         * (This is not the same as the 'chain|C' flag!)
                         */
                        // @ts-ignore
                        skip: number /*int*/
                        /**
                         * Force the MIME-type of the target file to be MIME-type. For instance,
                         * this can be used to setup the content-type based on some conditions.
                         * For example, the following snippet allows .php files to be displayed
                         * by mod_php if they are called with the .phps extension:
                         * RewriteRule ^(.+\.php)s$ $1 [T=application/x-httpd-php-source]
                         */
                        // @ts-ignore
                        type: boolean
                        // @ts-ignore
                        typeValue: java.lang.String | string
                        // @ts-ignore
                        public parse(maps: java.util.Map<java.lang.String | string, org.apache.catalina.valves.rewrite.RewriteMap>): void
                        // @ts-ignore
                        public addCondition(condition: org.apache.catalina.valves.rewrite.RewriteCond): void
                        /**
                         * Evaluate the rule based on the context
                         * @param url The char sequence
                         * @param resolver Property resolver
                         * @return <code>null</code> if no rewrite took place
                         */
                        // @ts-ignore
                        public evaluate(url: java.lang.CharSequence, resolver: org.apache.catalina.valves.rewrite.Resolver): java.lang.CharSequence
                        /**
                         * String representation.
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public isEscapeBackReferences(): boolean
                        // @ts-ignore
                        public setEscapeBackReferences(escapeBackReferences: boolean): void
                        // @ts-ignore
                        public isChain(): boolean
                        // @ts-ignore
                        public setChain(chain: boolean): void
                        // @ts-ignore
                        public getConditions(): org.apache.catalina.valves.rewrite.RewriteCond[]
                        // @ts-ignore
                        public setConditions(conditions: org.apache.catalina.valves.rewrite.RewriteCond[]): void
                        // @ts-ignore
                        public isCookie(): boolean
                        // @ts-ignore
                        public setCookie(cookie: boolean): void
                        // @ts-ignore
                        public getCookieName(): string
                        // @ts-ignore
                        public setCookieName(cookieName: java.lang.String | string): void
                        // @ts-ignore
                        public getCookieValue(): string
                        // @ts-ignore
                        public setCookieValue(cookieValue: java.lang.String | string): void
                        // @ts-ignore
                        public getCookieResult(): string
                        // @ts-ignore
                        public isEnv(): boolean
                        // @ts-ignore
                        public getEnvSize(): number /*int*/
                        // @ts-ignore
                        public setEnv(env: boolean): void
                        // @ts-ignore
                        public getEnvName(i: number /*int*/): string
                        // @ts-ignore
                        public addEnvName(envName: java.lang.String | string): void
                        // @ts-ignore
                        public getEnvValue(i: number /*int*/): string
                        // @ts-ignore
                        public addEnvValue(envValue: java.lang.String | string): void
                        // @ts-ignore
                        public getEnvResult(i: number /*int*/): string
                        // @ts-ignore
                        public isForbidden(): boolean
                        // @ts-ignore
                        public setForbidden(forbidden: boolean): void
                        // @ts-ignore
                        public isGone(): boolean
                        // @ts-ignore
                        public setGone(gone: boolean): void
                        // @ts-ignore
                        public isLast(): boolean
                        // @ts-ignore
                        public setLast(last: boolean): void
                        // @ts-ignore
                        public isNext(): boolean
                        // @ts-ignore
                        public setNext(next: boolean): void
                        // @ts-ignore
                        public isNocase(): boolean
                        // @ts-ignore
                        public setNocase(nocase: boolean): void
                        // @ts-ignore
                        public isNoescape(): boolean
                        // @ts-ignore
                        public setNoescape(noescape: boolean): void
                        // @ts-ignore
                        public isNosubreq(): boolean
                        // @ts-ignore
                        public setNosubreq(nosubreq: boolean): void
                        // @ts-ignore
                        public isQsappend(): boolean
                        // @ts-ignore
                        public setQsappend(qsappend: boolean): void
                        // @ts-ignore
                        public isQsdiscard(): boolean
                        // @ts-ignore
                        public setQsdiscard(qsdiscard: boolean): void
                        // @ts-ignore
                        public isRedirect(): boolean
                        // @ts-ignore
                        public setRedirect(redirect: boolean): void
                        // @ts-ignore
                        public getRedirectCode(): number /*int*/
                        // @ts-ignore
                        public setRedirectCode(redirectCode: number /*int*/): void
                        // @ts-ignore
                        public getSkip(): number /*int*/
                        // @ts-ignore
                        public setSkip(skip: number /*int*/): void
                        // @ts-ignore
                        public getSubstitution(): org.apache.catalina.valves.rewrite.Substitution
                        // @ts-ignore
                        public setSubstitution(substitution: org.apache.catalina.valves.rewrite.Substitution): void
                        // @ts-ignore
                        public isType(): boolean
                        // @ts-ignore
                        public setType(type: boolean): void
                        // @ts-ignore
                        public getTypeValue(): string
                        // @ts-ignore
                        public setTypeValue(typeValue: java.lang.String | string): void
                        // @ts-ignore
                        public getPatternString(): string
                        // @ts-ignore
                        public setPatternString(patternString: java.lang.String | string): void
                        // @ts-ignore
                        public getSubstitutionString(): string
                        // @ts-ignore
                        public setSubstitutionString(substitutionString: java.lang.String | string): void
                        // @ts-ignore
                        public getFlagsString(): string
                        // @ts-ignore
                        public setFlagsString(flagsString: java.lang.String | string): void
                        // @ts-ignore
                        public isHost(): boolean
                        // @ts-ignore
                        public setHost(host: boolean): void
                        // @ts-ignore
                        public getCookieDomain(): string
                        // @ts-ignore
                        public setCookieDomain(cookieDomain: java.lang.String | string): void
                        // @ts-ignore
                        public getCookieLifetime(): number /*int*/
                        // @ts-ignore
                        public setCookieLifetime(cookieLifetime: number /*int*/): void
                        // @ts-ignore
                        public getCookiePath(): string
                        // @ts-ignore
                        public setCookiePath(cookiePath: java.lang.String | string): void
                        // @ts-ignore
                        public isCookieSecure(): boolean
                        // @ts-ignore
                        public setCookieSecure(cookieSecure: boolean): void
                        // @ts-ignore
                        public isCookieHttpOnly(): boolean
                        // @ts-ignore
                        public setCookieHttpOnly(cookieHttpOnly: boolean): void
                    }
                }
            }
        }
    }
}
