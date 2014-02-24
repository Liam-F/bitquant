#!/bin/bash
# These are all of the packages that need to be installed before bootstrap
# is run

urpmi --no-suggests --auto \
maven \
maven-clean-plugin \
maven-assembly-plugin \
maven-compiler-plugin \
maven-dependency-plugin \
maven-install-plugin \
maven-release-plugin \
aether \
aether-connector-basic \
aether-transport-file \
aether-transport-http \
aether-transport-wagon \
fop zerofree \
nodejs \
gcc-c++ \
ipython make postgresql-devel

#gcc-c++ is needed for ethercalc







