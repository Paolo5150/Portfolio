import React from "react";
import {Icon} from '@iconify/react';
import cPlusplus from '@iconify/icons-logos/c-plusplus'
import unityIcon from '@iconify/icons-logos/unity';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import cSharp from '@iconify/icons-logos/c-sharp';
import phpIcon from '@iconify/icons-logos/php';
import css3 from '@iconify/icons-logos/css-3';
import html5 from '@iconify/icons-logos/html-5';
import mysqlIcon from '@iconify/icons-logos/mysql';
import openglIcon from '@iconify/icons-logos/opengl';
import jsIcon from '@iconify/icons-logos/javascript';
import lua from '@iconify/icons-logos/lua';
import java from '@iconify/icons-logos/java';
import android from '@iconify/icons-logos/android-icon';

export function getIcon(name:string, color:string):any {

    let width = '25px';

    if(name === "c++")
    {
        return <Popup 
        on="hover"
        trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color }} ><Icon icon={cPlusplus} width={width}/></button>  } position='right center'>
            <div>C++</div>
        </Popup>;
    }
    else if(name === "unity")
    {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={unityIcon} width={width}/></button>  } position='right center'>
                    <div>Unity</div>
                </Popup>;
    }
    else if(name === 'c#') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={cSharp} width={width}/></button>  } position='right center'>
                    <div>C#</div>
                </Popup>;
    }
    else if(name === 'php') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={phpIcon} width={width}/></button>  } position='right center'>
                    <div>PhP</div>
                </Popup>;
    }
    else if(name === 'html') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={html5} width={width}/></button>  } position='right center'>
                    <div>HTML5</div>
                </Popup>;
    }
    else if(name === 'css') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={css3} width={width}/></button>  } position='right center'>
                    <div>CSS3</div>
                </Popup>;
    }
    else if(name === 'sql') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={mysqlIcon} width={width}/></button>  } position='right center'>
                    <div>SQL</div>
                </Popup>;
    }
    else if(name === 'opengl') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={openglIcon} width='40px'/></button>  } position='right center'>
                    <div>OpenGL</div>
                </Popup>;
    }
    else if(name === 'javascript') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={jsIcon} width={width}/></button>  } position='right center'>
                    <div>JavaScript</div>
                </Popup>;
    }
    else if(name === 'lua') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={lua} width={width}/></button>  } position='right center'>
                    <div>Lua</div>
                </Popup>;
    }
    else if(name === 'java') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={java} width={width}/></button>  } position='right center'>
                    <div>Java</div>
                </Popup>;
    }
    else if(name === 'android') {
        return <Popup 
                on="hover"
                trigger={<button style={{border: '0', cursor: 'default', backgroundColor: color}} ><Icon icon={android} width={width}/></button>  } position='right center'>
                    <div>Android</div>
                </Popup>;
    }
    
}

