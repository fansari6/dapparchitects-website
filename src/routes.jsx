import Layout from '@/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProjectDetail';
import Contact from '@/pages/Contact';
import PageNotFound from '@/lib/PageNotFound';
import { productData } from '@/content/products/data';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      {
        path: 'products/:slug',
        element: <ProductDetail />,
        // Pre-render one static page per product.
        getStaticPaths: () => productData.map((p) => `/products/${p.slug}`),
      },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
];
