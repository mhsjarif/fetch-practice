import React from 'react';

const SelectLanguages = ({selecedLanguage, updateLanguage}) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map((language) => {
                return (
                    <li
                        style={language === selectedLanguage ? {color: '#d0021b'} : null} 
                        key={language} 
                        onClick={ () => updateLanguage(language) }>
                        {language}
                    </li>
                )
            })}
        </ul>
    )
}