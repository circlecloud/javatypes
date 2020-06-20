declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                    class ForwardingFileVisitor<T> extends java.lang.Object implements java.nio.file.FileVisitor<T> {
                        // @ts-ignore
                        constructor(visitor: java.nio.file.FileVisitor<T>)
                        // @ts-ignore
                        preVisitDirectory(dir: T, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                        // @ts-ignore
                        visitFile(file: T, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                        // @ts-ignore
                        visitFileFailed(file: T, exc: java.io.IOException): java.nio.file.FileVisitResult
                        // @ts-ignore
                        postVisitDirectory(dir: T, exc: java.io.IOException): java.nio.file.FileVisitResult
                    }
                }
            }
        }
    }
}
