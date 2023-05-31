# Dayanıklı Gelecek
Dayanıklı Gelecek, Türkiyedeki insanları depreme karşı bilinçlendirmeyi amaçlayan açık kaynak kodlu bir sosyal sorumluluk projesidir. 

## Özellikler
Dayanıklı Gelecek, oldukça basit bir blog sitesi olarak nitelendirilebilir. Proje hakkında detaylı bilgileri site üzerinden edinebilir ve ayrıca yazılar sekmesinden depreme karşı insanları bilinçlendirmeyi amaçlayan yazılarımıza erişebilirsiniz. 

Ayrıca bu yazıları diğer insanlarla paylaşabilir ve daha çok insana ulaşmasını sağlayabilirsiniz.

## Kurulum
Dayanıklı Gelecek projesinin lokalinizde kurup çalıştırmak için aşağıdaki adımları izlemelisiniz.
Öncelikle github reposunu indirin:
```
git clone https://github.com/sedatkimki/dayanikli-gelecek.git
```
Gerekli paketleri yükleyin:
```
cd dayanikli-gelecek
yarn/npm install
```
Çalıştırmak için aşağıdaki kodları kullanabilirsiniz.
- `yarn dev` – lokalde çalıştırmak için
- `yarn build` – production build'i için 


## Katkıda bulunmak için
Dayanıklı Gelecek, bir sosyal sorumluluk projesidir. Yazarlarımız projeye destek vermek isteyen gönüllü kişilerden oluşur. Eğer sizde projeye destek vermek ve gönüllülerimiz arasında yer almak istiyorsanız aşağıdaki adımları izleyebilirsiniz

### Adımlar

1. `posts` klasörüne, yazılan blogun başlığını slug formatına dönüştürerek adını kullanarak bir `mdx` dosyası oluşturun.
2. Markdown formatını kullanarak, aşağıdaki tabloyu oluşturun ve ilgili bilgileri kendi bilgilerinizle doldurun:
   
```
---
date: Blogun tarihi 
title:  Blog başlığı          
subtitle: Blog alt başlığı 
image: Blog görseli  
author: Yazar adı 
profileImage: Yazar profil görseli
profileLink: Yazar profil linki  
profileName: Yazar profil adı  
---
```

3. Blog içeriğini, bu tablonun altına Markdown formatında yapıştırın.
4. Eğer blogda bir resim varsa, `public/images/blog-ismi` şeklinde bir dizin oluşturun ve resimleri bu dizine yükleyin. Ardından, `mdx` dosyasında bu dizine referans vererek resimleri kullanın.
5. Değişiklikleri içeren bir pull request açın.

Bu adımları takip ederek, projeye katkıda bulunabilir ve kendi yazılarınızı Dayanıklı Gelecek projesinin bir parçası olarak paylaşabilirsiniz.

---

**Notlar:**

- Proje ile ilgili daha fazla bilgi için [Dayanıklı Gelecek](https://dayanikli-gelecek.vercel.app/) web sitesini ziyaret edebilirsiniz.
- İlgili kodların kaynağına, projenin [GitHub deposu](https://github.com/sedatkimki/dayanikli-gelecek) üzerinden erişebilirsiniz.
