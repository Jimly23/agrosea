import { arit1, arit2, arit3, arit4, arit5, bandeng, bandeng2, bandeng3, bandeng4, bandeng5, cungkir1, cungkir2, cungkir3, cungkir4, cungkir5, gatul1, gatul2, gatul3, gatul4, gatul5, gurame, gurame2, gurame3, gurame4, gurame5, jala1, jala2, jala3, jala4, jala5, jaring1, jaring2, jaring3, jaring4, jaring5, kail1, kail2, kail3, kail4, kail5, kepiting, kepiting2, kepiting3, kepiting4, kepiting5, lele, lele2, lele3, lele4, lele5, pancing1, pancing2, pancing3, pancing4, pancing5, patin, patin2, patin3, patin4, patin5, petel1, petel2, petel3, petel4, petel5, productAsin, productAsin2, productAsin3, productAsin4, productAsin5, productBitCabai, productBitCabai2, productBitCabai3, productBitCabai4, productBitCabai5, productBitHerbal, productBitHerbal2, productBitHerbal3, productBitHerbal4, productBitHerbal5, productBitSayur, productBitSayur2, productBitSayur3, productBitSayur4, productBitSayur5, productCumi, productCumi2, productCumi3, productCumi4, productCumi5, productJagung, productJagung2, productJagung3, productJagung4, productJagung5, productKedelai, productKedelai2, productKedelai3, productKedelai4, productKedelai5, productKit, productKit2, productKit3, productKit4, productKit5, productPadi, productPadi2, productPadi3, productPadi4, productPadi5, productRempah, productRempah2, productRempah3, productRempah4, productRempah5, productTelur, productTelur2, productTelur3, productTelur4, productTelur5, productUdang, productUdang2, productUdang3, productUdang4, productUdang5, sekopmini1, sekopmini2, sekopmini3, sekopmini4, sekopmini5, tombakIkan1, tombakIkan2, tombakIkan3, tombakIkan4 } from "../assets";

export const products = [
  {
    id: 1,
    productName: 'Padi per Kg',
    productImage: [productPadi,productPadi2,productPadi3,productPadi4,productPadi5],
    price: 42000,
    discountPercent: 13,
    priceAfterDiscount: 28000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Benih Padi Unggul Kualitas Super, Jenis Inbrida Sertani merupakan salah satu dari pengembangan sertani 13, Benih padi unggul, tahan penyakit dan hama, umur 75 hst. hasil panen yang memuaskan, 13-15 ton per ha dan padi genjah dan hasil melimpah sangat menguntungkan buat petani. <br/> <br/> 
    DESKRIPSI MULTI PADI plus <br/>
    ✓ Umur Panen : 75-80 HST <br/>
    ✓ Potensi Hasil : 13 Ton/Hektar (Rata2: 9-10 Ton/Hektar) - Jumlah Anakan : 20-30 batang <br/>
    ✓ Ketahan : Wereng coklat, kekeringan/kurang air <br/>
    ✓ Bentuk Gabah : Ramping memanjang <br/>
    ✓ Bulir Gabah : Kuning bersih dan bernas (padat berisi) <br/>
    ✓ Nasi : Putih dan pulen`,
    category: 'agro',
    toko: 'Agmart'
  },
  {
    id: 2,
    productName: 'Benih Jagung',
    productImage: [productJagung,productJagung2,productJagung3,productJagung4,productJagung5],
    price: 155000,
    discountPercent: 13,
    priceAfterDiscount: 132000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Jagung Manis Unggul, jenis jagung hibrida yang memiliki kualitas super, cocok untuk berbagai keperluan kuliner. Jagung ini tahan terhadap berbagai penyakit dan hama, serta memiliki masa tanam yang relatif singkat. Hasil panen jagung ini sangat memuaskan, mencapai 8-10 ton per hektar, sehingga sangat menguntungkan bagi petani. <br/> <br/> 
    ✓ DESKRIPSI JAGUNG MANIS UNGGUL <br/> 
    ✓ Umur Panen: 75-85 HST <br/> 
    ✓ Potensi Hasil: 8-10 Ton/Hektar (Rata-rata: 7-8 Ton/Hektar) <br/> 
    ✓ Ketahanan: Terhadap hama penggerek batang dan penyakit karat daun <br/> 
    ✓ Bentuk Jagung: Butir besar dan panjang <br/> 
    ✓ Warna Jagung: Kuning cerah dan bersih <br/> 
    ✓ Rasa: Manis dan renyah`,

    category: 'agro',
    toko: 'Agmart'
  },
  {
    id: 3,
    productName: 'Ikan Asin Segar',
    productImage: [productAsin,productAsin2,productAsin3,productAsin4,productAsin5],
    price: 64000,
    discountPercent: 13,
    priceAfterDiscount: 53000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Ikan Asin Premium, jenis ikan asin berkualitas tinggi yang diolah secara tradisional dengan garam alami. Ikan ini dipilih dari hasil tangkapan terbaik dan memiliki rasa gurih yang khas. Sangat cocok untuk berbagai masakan dan dijamin bebas dari bahan pengawet berbahaya. <br/> <br/> 
    DESKRIPSI IKAN ASIN PREMIUM <br/> 
    ✓ Jenis Ikan: Ikan Tenggiri <br/> 
    ✓ Proses Pengolahan: Asin dengan garam alami <br/> 
    ✓ Ketahanan: Bebas dari bahan pengawet <br/> 
    ✓ Bentuk Ikan: Utuh dan padat <br/> 
    ✓ Warna Ikan: Putih keabuan <br/> 
    ✓ Rasa: Gurih dan lezat`,
    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 4,
    productName: 'Cumi-cumi Segar',
    productImage: [productCumi,productCumi2,productCumi3,productCumi4,productCumi5],
    price: 56000,
    discountPercent: 13,
    priceAfterDiscount: 42000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Cumi-cumi Segar, jenis cumi-cumi berkualitas tinggi yang ditangkap langsung dari laut dan diproses dengan cepat untuk menjaga kesegarannya. Cumi-cumi ini memiliki tekstur yang kenyal dan rasa yang lezat, cocok untuk berbagai jenis masakan. <br/> <br/> 
    DESKRIPSI CUMI-CUMI SEGAR <br/> 
    ✓ Umur Panen: Langsung dari laut <br/> 
    ✓ Ketahanan: Segar dan cepat diproses <br/> 
    ✓ Bentuk Cumi-cumi: Utuh dan kenyal <br/> 
    ✓ Warna Cumi-cumi: Putih bersih <br/> 
    ✓ Rasa: Lezat dan gurih`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 5,
    productName: 'Kedelai',
    productImage: [productKedelai,productKedelai2,productKedelai3,productKedelai4,productKedelai5],
    price: 28000,
    discountPercent: 50,
    priceAfterDiscount: 14000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Kedelai Unggul, jenis kedelai berkualitas tinggi yang dipanen dari ladang terbaik. Kedelai ini kaya akan protein dan memiliki ukuran butir yang seragam. Cocok untuk dijadikan bahan dasar berbagai produk olahan seperti tempe, tahu, dan susu kedelai.<br/><br/>
    DESKRIPSI KEDELAI UNGGUL <br/>
    ✓ Umur Panen: 90-100 HST <br/>
    ✓ Potensi Hasil: 3-4 Ton/Hektar (Rata-rata: 2,5-3 Ton/Hektar) <br/>
    ✓ Ketahanan: Terhadap penyakit karat dan hama pengisap polong <br/>
    ✓ Bentuk Kedelai: Bulat dan seragam <br/>
    ✓ Warna Kedelai: Kuning bersih <br/>
    ✓ Rasa: Netral dan kaya protein`, 

    category: 'agro',
    toko: 'Agmart'
  },
  {
    id: 6,
    productName: 'Telur Ayam per peti',
    productImage: [productTelur,productTelur2,productTelur3,productTelur4,productTelur5],
    price: 292000,
    discountPercent: 13,
    priceAfterDiscount: 255000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Telur Ayam per Peti, jenis telur berkualitas tinggi yang berasal dari ayam petelur yang diberi pakan berkualitas. Setiap telur memiliki ukuran besar dengan cangkang yang kuat dan kuning telur yang kaya nutrisi. Cocok untuk kebutuhan sehari-hari, baik untuk dimasak langsung maupun dijadikan bahan dalam berbagai resep kue dan masakan. <br/><br/>
    DESKRIPSI TELUR AYAM PER PETI
    ✓ Umur Simpan: 3-4 Minggu pada suhu ruang <br/>
    ✓ Potensi Hasil: 30-40 Butir per ekor per bulan <br/>
    ✓ Ketahanan: Bebas dari penyakit unggas <br/>
    ✓ Bentuk Telur: Besar dan bulat <br/>
    ✓ Warna Telur: Cangkang coklat atau putih <br/>
    ✓ Rasa: Segar dan kaya nutrisi`,

    category: 'agro',
    toko: 'Agmart'
  },
  {
    id: 7,
    productName: 'Udang',
    productImage: [productUdang,productUdang2,productUdang3,productUdang4,productUdang5],
    price: 85000,
    discountPercent: 13,
    priceAfterDiscount: 71000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Udang Segar Premium kami berasal dari perairan yang bersih dan diproses dengan teknologi canggih untuk menjaga kesegarannya. Udang ini memiliki tekstur yang kenyal dan rasa yang manis, cocok untuk berbagai masakan seperti udang goreng, rebus, atau sebagai bahan tambahan dalam sup dan salad.<br/><br/>
    Spesifikasi:
    ✓ Ukuran: Medium (30-40 ekor/kg) <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Bebas dari bahan pengawet <br/>
    ✓ Warna: Merah muda cerah <br/>
    ✓ Rasa: Manis dan segar`,
    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 8,
    productName: 'Benih ikan lele /kg',
    productImage: [lele,lele2,lele3,lele4,lele5],
    price: 22000,
    discountPercent: 5,
    priceAfterDiscount: 29000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Benih Ikan Lele Unggul kami dipilih dari indukan berkualitas tinggi yang tahan terhadap penyakit dan memiliki pertumbuhan cepat. Cocok untuk budidaya di berbagai kondisi perairan. Benih ini memberikan hasil panen yang melimpah dengan tingkat kelangsungan hidup yang tinggi.<br/><br/>
    Spesifikasi:
    
    ✓ Ukuran Benih: 5-7 cm <br/>
    ✓ Pertumbuhan: Cepat <br/>
    ✓ Ketahanan: Terhadap penyakit dan kondisi perairan buruk <br/>
    ✓ Warna: Hitam keabu-abuan <br/>
    ✓ Produksi: 4-6 bulan hingga panen`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 9,
    productName: 'Ikan bandeng per kg',
    productImage: [bandeng,bandeng2,bandeng3,bandeng4,bandeng5],
    price: 32000,
    discountPercent: 11,
    priceAfterDiscount: 31000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Ikan Bandeng Segar kami diambil langsung dari tambak yang dikelola secara profesional untuk memastikan kesegaran dan kualitasnya. Ikan bandeng ini memiliki daging yang lembut dan gurih, sangat cocok untuk berbagai masakan seperti bandeng presto, bakar, atau goreng.<br/><br/>
    Spesifikasi:
    
    ✓ Ukuran: 500-700 gram per ekor <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Bebas dari bahan kimia berbahaya <br/>
    ✓ Warna: Perak cerah <br/>
    ✓ Rasa: Gurih dan lembut`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 10,
    productName: 'Ikan Gurame per kg',
    productImage: [gurame,gurame2,gurame3,gurame4,gurame5],
    price: 27000,
    discountPercent: 13,
    priceAfterDiscount: 21000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Ikan Gurame Segar kami dibesarkan di kolam air tawar yang bersih untuk menjamin kualitas dan rasa terbaik. Daging gurame ini tebal dan lembut, cocok untuk berbagai masakan seperti gurame bakar, asam manis, atau sup ikan.<br/><br/>
    Spesifikasi:
    ✓ Ukuran: 700-900 gram per ekor <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Bebas dari bahan pengawet <br/>
    ✓ Warna: Perak kehijauan <br/>
    ✓ Rasa: Lembut dan gurih`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 11,
    productName: 'Ikan Patin',
    productImage: [patin,patin2,patin3,patin4,patin5],
    price: 29800,
    discountPercent: 16,
    priceAfterDiscount: 37000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Ikan Patin Segar kami diambil langsung dari perairan bersih untuk menjaga kualitas dan rasa. Ikan patin ini memiliki daging yang lembut dan rendah lemak, sangat cocok untuk berbagai masakan seperti patin bakar, gulai, atau pepes patin.<br/><br/>
    Spesifikasi:
    ✓ Ukuran: 1-2 kg per ekor <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Bebas dari bahan kimia berbahaya <br/>
    ✓ Warna: Perak kehitaman <br/>
    ✓ Rasa: Lembut dan gurih`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 12,
    productName: 'Kepiting',
    productImage: [kepiting2,kepiting,kepiting3,kepiting4,kepiting5],
    price: 44000,
    discountPercent: 22,
    priceAfterDiscount: 130000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Kepiting Segar Premium kami berasal dari perairan bersih dan diproses dengan teknologi canggih untuk menjaga kesegarannya. Kepiting ini memiliki daging yang padat dan manis, sangat cocok untuk berbagai masakan seperti kepiting saus tiram, kepiting rebus, atau kepiting asam manis.<br/><br/>
    Spesifikasi:
    ✓ Ukuran: 500-700 gram per ekor <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Bebas dari bahan pengawet <br/>
    ✓ Warna: Coklat kemerahan <br/>
    ✓ Rasa: Manis dan gurih`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 13,
    productName: 'Bibit cabai rawit',
    productImage: [productBitCabai,productBitCabai2,productBitCabai3,productBitCabai4,productBitCabai5],
    price: 35000,
    discountPercent: 7,
    priceAfterDiscount: 19000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Bibit Cabai Rawit Unggul kami dipilih dari varietas terbaik yang tahan terhadap penyakit dan memiliki tingkat produktivitas tinggi. Bibit ini cocok untuk ditanam di berbagai jenis tanah dan kondisi iklim, memberikan hasil panen yang melimpah dan cabai yang pedas.<br/><br/>
    Spesifikasi:    
    ✓ Ukuran Bibit: 5-10 cm <br/>
    ✓ Pertumbuhan: Cepat dan seragam <br/>
    ✓ Ketahanan: Terhadap penyakit layu bakteri dan hama thrips <br/>
    ✓ Warna: Hijau segar <br/>
    ✓ Produktivitas: 1-1.5 kg per tanaman`,

    category: 'agro',
    toko: 'Marinaku'
  },
  {
    id: 14,
    productName: 'Bibit sayur pakcoy',
    productImage: [productBitSayur,productBitSayur2,productBitSayur3,productBitSayur4,productBitSayur5],
    price: 17000,
    discountPercent: 11,
    priceAfterDiscount: 11000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Bibit Sayur Pakcoy Unggul kami dipilih dari varietas terbaik yang cepat tumbuh dan tahan terhadap penyakit. Pakcoy ini memiliki daun yang lebar dan renyah, cocok untuk berbagai masakan seperti tumis, sup, atau sebagai bahan dalam salad.<br/><br/>
    Spesifikasi:
    ✓ Ukuran Bibit: 5-7 cm <br/>
    ✓ Pertumbuhan: Cepat dan seragam <br/>
    ✓ Ketahanan: Terhadap penyakit layu dan serangan ulat <br/>
    ✓ Warna: Hijau segar <br/>
    ✓ Produktivitas: 30-40 hari hingga panen`,

    category: 'agro',
    toko: 'Marinaku'
  },
  {
    id: 15,
    productName: 'kit hidroponik fullset',
    productImage: [productKit,productKit2,productKit3,productKit4,productKit5],
    price: 185000,
    discountPercent: 19,
    priceAfterDiscount: 535000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Kit Hidroponik Fullset kami dirancang untuk memudahkan Anda menanam berbagai jenis sayuran di rumah dengan sistem hidroponik. Kit ini sudah lengkap dengan semua peralatan dan bahan yang dibutuhkan, termasuk nutrisi tanaman, pipa, dan media tanam.<br/><br/>
    Spesifikasi:
    ✓ Ukuran Kit: 1x1 meter <br/>
    ✓ Isi Kit: Pipa PVC, pompa air, media tanam, nutrisi AB mix, net pot, dan instruksi <br/>
    ✓ Ketahanan: Bahan berkualitas tahan lama <br/>
    ✓ Warna: Putih (pipa) dan hitam (net pot) <br/>
    ✓ Keunggulan: Mudah dipasang dan digunakan, cocok untuk pemula`,

    category: 'agro',
    toko: 'Marinaku'
  },
  {
    id: 16,
    productName: 'Paket rempah-rempah',
    productImage: [productRempah,productRempah2,productRempah3,productRempah4,productRempah5],
    price: 31000,
    discountPercent: 14,
    priceAfterDiscount: 45000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Paket Rempah-rempah Lengkap kami terdiri dari berbagai jenis rempah berkualitas tinggi yang dipilih dari sumber terbaik. Paket ini sangat cocok untuk melengkapi dapur Anda dan memberikan cita rasa khas pada masakan Anda, termasuk masakan tradisional dan internasional.<br/><br/>
    Spesifikasi:
    Isi Paket: Jahe, kunyit, lengkuas, kayu manis, cengkeh, dan pala <br/>
    ✓ Kualitas: Grade A <br/>
    ✓ Ketahanan: Dikemas dengan baik untuk menjaga kesegaran <br/>
    ✓ Warna: Beragam (tergantung jenis rempah) <br/>
    ✓ Rasa: Aromatik dan kaya rasa`,

    category: 'agro',
    toko: 'Marinaku'
  },
  {
    id: 17,
    productName: 'Bibit tanaman herbal',
    productImage: [productBitHerbal,productBitHerbal2,productBitHerbal3,productBitHerbal4,productBitHerbal5],
    price: 24500,
    discountPercent: 13,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Bibit Tanaman Herbal Unggul kami dipilih dari varietas terbaik yang mudah tumbuh dan tahan terhadap penyakit. Bibit ini cocok untuk ditanam di kebun rumah atau dalam pot, memberikan Anda tanaman herbal segar yang dapat digunakan untuk berbagai keperluan kuliner dan kesehatan.<br/><br/>
    Spesifikasi:
    ✓ Jenis Bibit: Kemangi, Mint, Rosemary, dan Thyme <br/>
    ✓ Ukuran Bibit: 5-10 cm <br/>
    ✓ Pertumbuhan: Cepat dan seragam <br/>
    ✓ Ketahanan: Terhadap penyakit dan hama umum <br/>
    ✓ Warna: Hijau segar <br/>
    ✓ Keunggulan: Aromatik dan kaya manfaat`,

    category: 'agro',
    toko: 'Marinaku'
  },
  {
    id: 18,
    productName: 'Celurit',
    productImage: [arit1,arit2,arit3,arit4,arit5],
    price: 185000,
    discountPercent: 8,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Celurit Tajam Berkualitas kami dibuat dari bahan baja pilihan yang kuat dan tahan lama. Alat ini cocok untuk berbagai keperluan pertanian dan perkebunan, termasuk memotong rumput, ranting, dan tanaman lain dengan mudah dan efisien.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja pilihan <br/>
    ✓ Panjang: 50 cm <br/>
    ✓ Ketajaman: Tinggi, dapat diasah ulang <br/>
    ✓ Pegangan: Kayu ergonomis <br/>
    ✓ Warna: Baja perak dengan pegangan coklat <br/>
    ✓ Keunggulan: Tahan lama dan mudah digunakan`,

    category: 'agro',
    toko: 'Agroku'
  },
  {
    id: 19,
    productName: 'Sekop Mini',
    productImage: [cungkir1,cungkir2,cungkir3,cungkir4,cungkir5],
    price: 10000,
    discountPercent: 8,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Sekop Mini Multifungsi kami adalah alat berkebun yang sempurna untuk menanam, memindahkan tanah, dan merawat tanaman dalam pot. Dibuat dari bahan berkualitas tinggi yang kuat dan tahan lama, sekop ini memiliki pegangan ergonomis yang nyaman digunakan.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja anti karat <br/>
    ✓ Panjang: 30 cm <br/>
    ✓ Ketahanan: Tinggi terhadap karat dan korosi <br/>
    ✓ Pegangan: Plastik ergonomis <br/>
    ✓ Warna: Hitam dan hijau <br/>
    ✓ Keunggulan: Ringan dan mudah digunakan`,

    category: 'agro',
    toko: 'Agroku'
  },
  {
    id: 20,
    productName: 'Gantul',
    productImage: [gatul1,gatul2,gatul3,gatul4,gatul5],
    price: 13000,
    discountPercent: 4,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Gantul adalah alat pertanian tradisional yang digunakan untuk mencabut rumput dan gulma di ladang. Dibuat dari bahan baja berkualitas tinggi dengan pegangan ka✓ yu yang kuat, gantul ini sangat efektif untuk menjaga kebersihan lahan pertanian.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja dan kayu <br/>
    ✓ Panjang: 40 cm <br/>
    ✓ Ketahanan: Tinggi, tahan lama <br/>
    ✓ Pegangan: Kayu ergonomis <br/>
    ✓ Warna: Baja perak dengan pegangan coklat <br/>
    ✓ Keunggulan: Efektif dan mudah digunakan`,
    
    category: 'agro',
    toko: 'Agroku'
  },
  {
    id: 21,
    productName: 'Jala 1,5 meter',
    productImage: [jala1,jala2,jala3,jala4,jala5],
    price: 150000,
    discountPercent: 6,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Jala Penangkap Ikan kami dibuat dari bahan nilon berkualitas tinggi yang kuat dan tahan lama. Jala ini sangat efektif untuk menangkap ikan di perairan dangkal maupun dalam, cocok untuk para nelayan dan hobi memancing.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Nilon <br/>
    ✓ Ukuran: 2x2 meter <br/>
    ✓ Ketahanan: Tinggi terhadap air dan sinar UV <br/>
    ✓ Warna: Putih transparan <br/>
    ✓ Keunggulan: Kuat dan mudah digunakan`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 22,
    productName: 'Jaring',
    productImage: [jaring1,jaring2,jaring3,jaring4,jaring5],
    price: 24000,
    discountPercent: 3,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Jaring Serbaguna kami terbuat dari bahan polietilen berkualitas tinggi yang tahan lama dan kuat. Jaring ini cocok untuk berbagai keperluan seperti melindungi tanaman dari hama, membangun pagar sementara, atau digunakan dalam aktivitas olahraga.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Polietilen <br/>
    ✓ Ukuran: 3x3 meter <br/>
    ✓ Ketahanan: Tinggi terhadap cuaca dan sinar UV <br/>
    ✓ Warna: Hijau <br/>
    ✓ Keunggulan: Fleksibel dan multifungsi`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 23,
    productName: 'Kail Pancing',
    productImage: [kail1,kail2,kail3,kail4,kail5],
    price: 8400,
    discountPercent: 2,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Kail Pancing Super Tajam kami terbuat dari baja karbon berkualitas tinggi yang dirancang khusus untuk memastikan penangkapan ikan yang optimal. Kail ini memiliki ujung yang sangat tajam dan kuat, cocok untuk berbagai jenis memancing baik di air tawar maupun air asin.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja karbon <br/>
    ✓ Ukuran: No. 2, 4, 6, 8, 10 <br/>
    ✓ Ketajaman: Tinggi, tidak mudah tumpul <br/>
    ✓ Warna: Hitam mengkilap <br/>
    ✓ Keunggulan: Kuat, tajam, dan tahan karat`,

    category: 'marina',
    toko: 'Marinaku'
  },
  {
    id: 24,
    productName: 'Pancingan Ikan',
    productImage: [pancing1,pancing2,pancing3,pancing4,pancing5],
    price: 215000,
    discountPercent: 17,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Pancingan Fullset Profesional kami hadir dengan semua yang Anda butuhkan untuk memulai memancing, termasuk joran, reel, kail, dan aksesoris lainnya. Set ini dirancang untuk memberikan pengalaman memancing yang menyenangkan dan efisien, baik untuk pemula maupun profesional.<br/><br/>
    Spesifikasi:
    ✓ Isi Set: Joran, reel, kail, tali pancing, pelampung, dan pemberat <br/>
    ✓ Bahan: Joran dari fiberglass, reel dari aluminium <br/>
    ✓ Panjang Joran: 2,1 meter <br/>
    ✓ Warna: Hitam dengan aksen merah <br/>
    ✓ Keunggulan: Komplet, mudah digunakan, dan tahan lama`,

    category: 'marina',
    toko: 'Agroku'
  },
  {
    id: 25,
    productName: 'Petel',
    productImage: [petel1,petel2,petel3,petel4,petel5],
    price: 47900,
    discountPercent: 8,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Petel adalah alat pertanian tradisional yang digunakan untuk menggemburkan tanah dan membersihkan lahan dari gulma. Dibuat dari bahan baja berkualitas tinggi dan pegangan kayu yang kuat, petel ini sangat efektif untuk menjaga kesuburan tanah di kebun Anda.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja dan kayu <br/>
    ✓ Panjang: 50 cm <br/>
    ✓ Ketahanan: Tinggi, tahan lama <br/>
    ✓ Pegangan: Kayu ergonomis <br/>
    ✓ Warna: Baja perak dengan pegangan coklat <br/>
    ✓ Keunggulan: Efektif dan mudah digunakan`,

    category: 'agro',
    toko: 'Agroku'
  },
  {
    id: 26,
    productName: 'Sekop Mini',
    productImage: [sekopmini1,sekopmini2,sekopmini3,sekopmini4,sekopmini5],
    price: 11000,
    discountPercent: 14,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Sekop Mini Multifungsi kami adalah alat berkebun yang sempurna untuk menanam, memindahkan tanah, dan merawat tanaman dalam pot. Dibuat dari bahan berkualitas tinggi yang kuat dan tahan lama, sekop ini memiliki pegangan ergonomis yang nyaman digunakan.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Baja anti karat <br/>
    ✓ Panjang: 30 cm <br/>
    ✓ Ketahanan: Tinggi terhadap karat dan korosi <br/>
    ✓ Pegangan: Plastik ergonomis <br/>
    ✓ Warna: Hitam dan hijau <br/>
    ✓ Keunggulan: Ringan dan mudah digunakan`,

    category: 'agro',
    toko: 'Agroku'
  },
  {
    id: 27,
    productName: 'Tombak Ikan',
    productImage: [tombakIkan1,tombakIkan2,tombakIkan3,tombakIkan4],
    price: 185000,
    discountPercent: 15,
    priceAfterDiscount: 51000,
    sellerCity: 'Aceh',
    rating: 4.3,
    totalSold: 1,
    desc: `Tombak Ikan Berkualitas Tinggi kami dirancang khusus untuk penangkapan ikan di perairan dangkal. Tombak ini dibuat dari bahan stainless steel yang kuat dan tahan karat, dengan pegangan yang ergonomis untuk kemudahan penggunaan.<br/><br/>
    Spesifikasi:
    ✓ Bahan: Stainless steel <br/>
    ✓ Panjang: 1,5 meter <br/>
    ✓ Ketajaman: Tinggi, ujung tombak runcing <br/>
    ✓ Pegangan: Kayu atau plastik ergonomis <br/>
    ✓ Warna: Baja perak dengan pegangan hitam <br/>
    ✓ Keunggulan: Kuat, tahan lama, dan mudah digunakan`,

    category: 'marina',
    toko: 'Marinaku'
  },
]


