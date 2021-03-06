<?php

namespace Netgen\Bundle\RemoteMediaBundle\MenuPlugin;

use Netgen\Bundle\AdminUIBundle\MenuPlugin\MenuPluginInterface;
use Symfony\Component\HttpFoundation\Request;

class RemoteMediaMenuPlugin implements MenuPluginInterface
{
    /**
     * Returns plugin identifier.
     *
     * @return string
     */
    public function getIdentifier()
    {
        return 'ngremotemedia';
    }

    /**
     * Returns the list of templates this plugin supports.
     *
     * @return array
     */
    public function getTemplates()
    {
        return [
            'head' => 'NetgenRemoteMediaBundle:ngadminui/plugin:head.html.twig',
            'aside' => '@NetgenAdminUI/menu/plugins/legacy/aside.html.twig',
            'left' => '@NetgenAdminUI/menu/plugins/legacy/left.html.twig',
            'top' => '@NetgenAdminUI/menu/plugins/legacy/top.html.twig',
        ];
    }

    /**
     * Returns if the menu is active.
     *
     * @return bool
     */
    public function isActive()
    {
        return false;
    }

    /**
     * Returns if this plugin matches the current request.
     *
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return bool
     */
    public function matches(Request $request)
    {
        return false;
    }
}
