{if $type|eq('image')}
    {def $format = 'admin_preview'}
    {def $media = ngremotemedia($remote_value, $attribute.object.class_identifier, $format, true)}
    {def $thumb_url = $media.url}
{else}
    {def $thumb_url = videoThumbnail($remote_value)}
{/if}

<div class="ngremotemedia-image">
    {if $remote_value.resourceId}
        <div class="image-wrap">
            {if $remote_value.mediaType|eq('image')}
                <img src="{$thumb_url}"  />
            {elseif $remote_value.mediaType|eq('video')}
                <i class="ngri-video ngri-big"></i>
            {else}
                <i class="ngri-book ngri-big"></i>
            {/if}
        </div>

        <div class="image-meta">
            <h3 class="title">{$remote_value.resourceId|wash}</h3>

            <div class="tagger">
                <div class="ngremotemedia-alttext">
                    <span class="help-block description">{'Alternate text'|i18n('ngremotemedia')}</span>
                    <input type="text"
                            name="{$base}_alttext_{$fieldId}" value="{$remote_value.metaData.alt_text}" class="media-alttext data">
                </div>

                {def $tags = $remote_value.metaData.tags}
                <select name="{$base}_tags_{$fieldId}[]" class="ngremotemedia-newtags" multiple="multiple">
                    {foreach $tags as $tag}
                        <option value="{$tag}" selected="selected">{$tag}</option>
                    {/foreach}
                </select>

            </div>
            {if $remote_value.size|null()|not()}
                <p>{'Size'|i18n( 'content/edit' )}: {$remote_value.size|si( byte )}</p>
            {/if}


            <div>

                {if not(is_set($g_auto))}
                    {def $g_auto = $remote_value.metaData.g_auto|default('')}
                {/if}

                {'Gravity Mode'|i18n( 'extension/ngremotemedia/interactions' )}
                <select name="{$base}_g_auto_{$fieldId}">
                    <option value=""        {if $g_auto|eq('')       }selected{/if}>{'None'|i18n( 'extension/ngremotemedia/interactions' )}</option>
                    <option value="subject" {if $g_auto|eq('subject')}selected{/if}>{'subject'|i18n( 'extension/ngremotemedia/interactions' )}</option>
                    <option value="classic" {if $g_auto|eq('classic')}selected{/if}>{'classic'|i18n( 'extension/ngremotemedia/interactions' )}</option>
                </select>

            </div>

            <br>

        </div>
    {/if}
</div>
