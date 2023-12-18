FROM node:18-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan yarn.lock ke dalam direktori kerja
COPY package.json yarn.lock ./

# Install dependensi menggunakan Yarn
RUN yarn install

# Salin seluruh kode sumber ke dalam direktori kerja
COPY ./ .

EXPOSE 8080


# Eksekusi perintah start aplikasi
CMD ["yarn", "dev"]