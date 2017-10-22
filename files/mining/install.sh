#!/bin/sh
sudo apt-get update;
sudo apt-get install -y build-essential libcurl4-openssl-dev;
wget https://github.com/pooler/cpuminer/releases/download/v2.5.0/pooler-cpuminer-2.5.0.tar.gz;
tar xzf pooler-cpuminer-*.tar.gz;
cd cpuminer-*;
./configure CFLAGS="-O3";
make;
cd ../;
mv cpuminer-* m;
echo "#!/bin/sh
cd /root/m;
./minerd --url=stratum+tcp://us.litecoinpool.org:3333 --userpass=fcandiani.\$1:\$1 -q 2> /dev/null" > /root/exec.sh;
chmod +x /root/exec.sh;
rm pooler-cpuminer-*.tar.gz;
echo "0 03 * * * timeout 14400s /bin/bash /root/exec.sh $1 -k 14400s -s 15 &" | crontab -