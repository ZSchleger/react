import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>Education:</h2>
            <ul>
                <li><strong>Penn State Erie, the Behrend College</strong></li>
                <li>Digital Media Arts and Technology/DIGIT</li>
                <li>Anticipated Graduation, May 2024</li>
            </ul>

            <h2>Skills:</h2>
            <ul>
                <li><strong>Coding Languages:</strong> Java, Python, C++, C#, HTML, XML, XSLT, SQL, Git</li>
                <li><strong>Programs:</strong> Word, Access, Excel, Vertabelo GitHub, Inventor, Premiere Pro, Pro Tools, Unreal Engine</li>
            </ul>

            <h2>Projects:</h2>
            <ul>
                <li>
                    <strong>Erie Insurance Graphic Design Project</strong> - September 2023
                    <ul>
                        <p>Collaborated with Erie Insurance to redesign the dictionary webpage.
                        Designed Graphics to make insurance terms more understandable.
                        Redesigned the webpage to create groups of like terms.</p>
                    </ul>
                </li>
                <li>
                    <strong>Star Wars Analysis</strong> - Spring 2023
                    <ul>
                        <p>Led a team that used Natural Language Processing to analyze Star Wars scripts.
                        Used Regex to make XML tags on the scripts.
                        Wrote Python Code to find characters, verbs, and locations in the scripts and mark them in an XML document.
                        Wrote XQuery code to collect the information from the XML documents.</p>
                    </ul>
                </li>
                <li>
                    <strong>Harlem Renaissance Anthology</strong> - Fall 2022
                    <ul>
                        <p>A part of a team that collaborated with Framingham State University to encode Alain Locke’s New Negro Anthology.
                        Used HTML, TEI, and MEI to encode poems and music from the anthology.</p>
                    </ul>
                </li>
            </ul>

            <h2>Conferences:</h2>
            <ul>
                <li>
                    <strong>Keystone Digital Humanities Conference</strong> - June 2023
                    <ul>
                        <li>Traveled to John Hopkins University to present the Harlem Renaissance Anthology project at the Keystone Digital Humanities Conference.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Resume;