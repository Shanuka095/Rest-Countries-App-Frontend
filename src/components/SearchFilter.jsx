export default function SearchFilter({ isDarkMode, searchTerm, setSearchTerm, region, setRegion, language, setLanguage }) {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Arabic'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Clear region and language filters when searching
    if (e.target.value) {
      setRegion('');
      setLanguage('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', animation: 'slideInUp 0.5s ease', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ border: `1px solid ${isDarkMode ? '#450F8A' : '#6015C3'}`, background: isDarkMode ? '#2A2640' : '#fff', color: isDarkMode ? '#E0DFFF' : '#2D1B4E', padding: '0.75rem', borderRadius: '0.5rem', flex: '1 1 300px', maxWidth: '24rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
        onFocus={(e) => e.target.style.boxShadow = `0 0 0 3px ${isDarkMode ? '#450F8A66' : '#6015C366'}`}
        onBlur={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
      />
      <div style={{ display: 'flex', gap: '1.5rem', flex: '1 1 auto', maxWidth: '24rem', justifyContent: 'flex-end' }}>
        <select
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setSearchTerm(''); // Clear search when selecting a region
            setLanguage('');
          }}
          style={{ border: `1px solid ${isDarkMode ? '#450F8A' : '#6015C3'}`, background: isDarkMode ? '#2A2640' : '#fff', color: isDarkMode ? '#E0DFFF' : '#2D1B4E', padding: '0.75rem', borderRadius: '0.5rem', flex: '1', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
          onFocus={(e) => e.target.style.boxShadow = `0 0 0 3px ${isDarkMode ? '#450F8A66' : '#6015C366'}`}
          onBlur={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
        >
          <option value="">Filter by Region</option>
          {regions.map((reg) => <option key={reg} value={reg}>{reg}</option>)}
        </select>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setSearchTerm(''); // Clear search when selecting a language
            setRegion('');
          }}
          style={{ border: `1px solid ${isDarkMode ? '#450F8A' : '#6015C3'}`, background: isDarkMode ? '#2A2640' : '#fff', color: isDarkMode ? '#E0DFFF' : '#2D1B4E', padding: '0.75rem', borderRadius: '0.5rem', flex: '1', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', outline: 'none', transition: 'all 0.3s ease', fontSize: '1rem' }}
          onFocus={(e) => e.target.style.boxShadow = `0 0 0 3px ${isDarkMode ? '#450F8A66' : '#6015C366'}`}
          onBlur={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
        >
          <option value="">Filter by Language</option>
          {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
        </select>
      </div>
      <style>
        {`
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}