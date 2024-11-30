import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar({ secciones }) {
    const [query, setQuery] = useState('');
    const [filteredSecciones, setFilteredSecciones] = useState([]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setQuery(searchTerm);

        // Filtrar por nombre o keywords
        const results = secciones.filter((seccion) =>
            seccion.nombre.toLowerCase().includes(searchTerm) ||
            seccion.keywords.some((keyword) => keyword.includes(searchTerm))
        );

        setFilteredSecciones(results);
    };

    const handleClearSearch = () => {
        setQuery('');
        setFilteredSecciones([]);
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={handleSearch}
                className="searchBarInput"
            />
            
            {query && (
                <div className="searchResults">
                    {filteredSecciones.length > 0 ? (
                        filteredSecciones.map((seccion, index) => (
                            <Link
                                to={`/${seccion.id}`}
                                key={index}
                                onClick={handleClearSearch}
                                className="searchResultItem"
                            >
                                {seccion.nombre}
                            </Link>
                        ))
                    ) : (
                        <p className="noResults">No se encontraron resultados</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;