set -ex

JAVA_HOME=${JAVA_HOME:-'/usr/java/jdk1.8.0_221-amd64'}

GROUP=${3:-org/springframework}
ARTIFACT=${1:-spring-core}
VERSION=${2:-5.2.6}.RELEASE

ARTIFACT_VERSION=${ARTIFACT}-${VERSION}

DOWNLOAD_URL=https://repo.yumc.pw/repository/maven-public/${GROUP}/${ARTIFACT}/${VERSION}/${ARTIFACT_VERSION}-sources.jar

mkdir -p jars sources docs

if [[ ! -f "jars/${ARTIFACT_VERSION}.jar" ]]; then
    echo "Download source jar file..."
    wget ${DOWNLOAD_URL} -O jars/${ARTIFACT_VERSION}.jar > /dev/null
fi

if [[ ! -d "sources/${ARTIFACT_VERSION}/META-INF" ]]; then
    mkdir -p sources/${ARTIFACT_VERSION}
    echo "unzip source jar file..."
    unzip -o jars/${ARTIFACT_VERSION}.jar -d sources/${ARTIFACT_VERSION} > /dev/null
fi

echo "generate javadoc json"
${JAVA_HOME}/bin/javadoc \
    -doclet com.raidandfade.JsonDoclet.Main \
    -docletpath json-jdoc.jar \
    -sourcepath $(pwd)/sources/${ARTIFACT_VERSION} \
    -cp jars,${JAVA_HOME}/lib,${JAVA_HOME}/jre/lib \
    -subpackages org

rm -rf docs/${ARTIFACT}
mv javadocs/ docs/${ARTIFACT}/

# rabbitmq spring sponge bukkit jdk bungee nukkit
TYPE=${ARTIFACT}
TARGET=packages/${TYPE}/dist
npx tsc build.ts --outDir dist
cd dist
rm -rf temp
mkdir -p temp
echo "generate javadoc d.ts file"
node build.js ${TYPE}
cd ../
rm -rf ${TARGET}/*.ts
mkdir -p ${TARGET}
cp dist/temp/* ${TARGET}/ -R > /dev/null
echo "generate package.json file"
cat > packages/${TYPE}/package.json<<EOF
{
    "name": "@javatypes/${TYPE}",
    "version": "0.0.0",
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
