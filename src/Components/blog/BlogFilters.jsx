import style from '../../css/Blog.module.css';

function BlogFilters({ categories, active, onChange }) {
  const all = ['Todas', ...categories];

  if (categories.length === 0) return null;

  return (
    <div className={style.filters} role="tablist" aria-label="Categorías del blog">
      {all.map((cat) => {
        const isActive = active === cat || (cat === 'Todas' && !active);
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`${style.chip} ${isActive ? style.chipActive : ''}`}
            onClick={() => onChange(cat === 'Todas' ? null : cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default BlogFilters;
