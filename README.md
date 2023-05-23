# Mantine Next Template

Get started with Mantine + Next with just a few button clicks.
Click `Use this template` button at the header of repository or [follow this link](https://github.com/mantinedev/mantine-next-template/generate) and
create new repository with `@mantine` packages. Note that you have to be logged in to GitHub to generate template.

## Features

This template comes with several essential features:

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier


# Dayanıklı Gelecek - Bloglara Destek

Dayanıklı Gelecek adlı front-end projesi, destekte bulunmak isteyenlerin kendi bloglarını mdx formatında yazıp sitemiz üzerinde yayınlamalarını sağlar. Bu README dosyasında, projeye katkıda bulunmak isteyenlerin izlemesi gereken adımları bulabilirsiniz.

## Adımlar

1. `posts` klasörüne, yazılan blogun başlığını slug formatına dönüştürerek adını kullanarak bir `mdx` dosyası oluşturun.
2. Markdown formatını kullanarak, aşağıdaki tabloyu oluşturun ve ilgili bilgileri kendi bilgilerinizle doldurun:
   
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

3. Blog içeriğini, bu tablonun altına Markdown formatında yapıştırın.
4. Eğer blogda bir resim varsa, `public/images/blog-ismi` şeklinde bir dizin oluşturun ve resimleri bu dizine yükleyin. Ardından, `mdx` dosyasında bu dizine referans vererek resimleri kullanın.
5. Değişiklikleri içeren bir pull request açın.

Bu adımları takip ederek, projeye katkıda bulunabilir ve kendi blog yazılarınızı Dayanıklı Gelecek projesinin bir parçası olarak paylaşabilirsiniz.

---

**Notlar:**

- Proje ile ilgili daha fazla bilgi için [Dayanıklı Gelecek](https://www.dayanikligelecek.com) web sitesini ziyaret edebilirsiniz.
- İlgili kodların kaynağına, projenin [GitHub deposu](https://github.com/sedatkimki/dayanikli-gelecek) üzerinden erişebilirsiniz.
