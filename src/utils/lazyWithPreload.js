import { createElement, lazy } from 'react';

// Como React.lazy, pero con .preload(): si el módulo ya se descargó, el componente
// se renderiza directo, sin pasar por el fallback de <Suspense>.
export default function lazyWithPreload(factory) {
  let loaded = null;
  let promise = null;
  const preload = () => {
    promise ??= factory().then((mod) => {
      loaded = mod.default;
      return mod;
    });
    return promise;
  };
  const Lazy = lazy(preload);
  const Component = (props) => createElement(loaded ?? Lazy, props);
  Component.preload = preload;
  return Component;
}
