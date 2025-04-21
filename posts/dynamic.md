---
title: 'Dynamic Routing in Next.js'
date: '2020-01-08'
description: 'Create pages on the fly with file-based routing.'
---

Next.js supports dynamic routes using bracket notation like `[slug].js`.  
You can generate pages at build time with `getStaticPaths`, or at request time with `getServerSideProps` for more flexibility.
