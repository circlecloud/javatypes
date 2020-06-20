set -e

JAVA_HOME=${JAVA_HOME:-'/usr/java/jdk1.8.0_221-amd64'}

GROUP=${1:-org.springframework}
GROUP=${GROUP//./\/}
ARTIFACT=${2:-spring-core}
VERSION=${3:-5.2.6.RELEASE}
PACKAGES=${4:-org}

ARTIFACT_VERSION=${ARTIFACT}-${VERSION}

DOWNLOAD_URL=https://repo.yumc.pw/repository/maven-public/${GROUP}/${ARTIFACT}/${VERSION}/${ARTIFACT_VERSION}-sources.jar

mkdir -p jars sources docs

if [[ ! -f "jars/${ARTIFACT_VERSION}.jar" ]]; then
    echo "Download source file jars/${ARTIFACT_VERSION}.jar from ${DOWNLOAD_URL}..."
    wget ${DOWNLOAD_URL} -O jars/${ARTIFACT_VERSION}.jar > /dev/null
fi

if [[ ! -d "sources/${ARTIFACT_VERSION}/META-INF" ]]; then
    mkdir -p sources/${ARTIFACT_VERSION}
    echo "Unzip source file jars/${ARTIFACT_VERSION}.jar to sources/${ARTIFACT_VERSION}..."
    unzip -o jars/${ARTIFACT_VERSION}.jar -d sources/${ARTIFACT_VERSION} > /dev/null
fi

TYPE=${ARTIFACT}
TARGET=packages/${TYPE}/dist

echo "Generate typescript d.ts file..."
${JAVA_HOME}/bin/javadoc \
    -d ${TARGET} \
    -js $(pwd)/dist/parse.js \
    -doclet pw.yumc.JsonDoclet.Main \
    -docletpath script-doclet.jar \
    -sourcepath $(pwd)/sources/${ARTIFACT_VERSION} \
    -cp $(pwd)/jars,${JAVA_HOME}/lib,${JAVA_HOME}/jre/lib \
    -subpackages ${PACKAGES}

echo "Generate package.json file..."
cat > packages/${TYPE}/package.json<<EOF
{
    "name": "@javatypes/${TYPE}",
    "version": "${VERSION:-0.0.0}",
    "description": "java ${TYPE} types",
    "author": "MiaoWoo <admin@yumc.pw>",
    "homepage": "https://github.com/circlecloud/javatypes#readme",
    "license": "MIT",
    "types": "dist/index.d.ts",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/circlecloud/javatypes.git"
    },
    "bugs": {
        "url": "https://github.com/circlecloud/javatypes/issues"
    }
}
EOF
