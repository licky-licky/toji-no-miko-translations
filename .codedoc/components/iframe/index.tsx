import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { CodedocTheme } from '@codedoc/core';
import { TagStyle } from './style';            

export function Iframe(
    this: ThemedComponentThis<CodedocTheme>,
    _: any,
    renderer: RendererLike<any, any>,
    content: any
    ) {
    const classes = this.theme.classes(TagStyle);
    const id = content.textContent
    // return <iframe width="640" height="480"
    //         src={`https://www.youtube.com/embed/${id}`}></iframe>
   
    
    return  <div>{content}</div>
}