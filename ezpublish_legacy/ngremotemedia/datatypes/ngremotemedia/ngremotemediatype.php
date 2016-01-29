<?php

use Netgen\Bundle\RemoteMediaBundle\Core\FieldType\RemoteMedia\Value;

class NgRemoteMediaType extends eZDataType
{
	const DATA_TYPE_STRING = 'ngremotemedia';
    const FIELD_FORMATS = 'data_text4'; // the only one with length of 255
    const FIELD_VALUE = 'data_text';

    /**
     * Construction of the class, note that the second parameter in eZDataType
     * is the actual name showed in the datatype dropdown list.
     */
    function __construct()
    {
        parent::__construct(
            self::DATA_TYPE_STRING,
            ezpI18n::tr( 'extension/ngremotemedia/datatypes', 'Remote Media' ),
            array(
                'serialize_supported' => true
            )
        );
    }

    /**
     * Called when the datatype is added to a content class
     *
     * @param eZHTTPTool $http
     * @param string $base
     * @param eZContentClassAttribute $classAttribute
     */
    public function fetchClassAttributeHTTPInput($http, $base, $class)
    {
        $versionsKey = $base . '_versions_' . $class->attribute('id');
        if ($http->hasPostVariable($versionsKey))
        {
            $versions = explode("\n", $http->variable($versionsKey, ''));
            $versions = array_filter($versions);
            $versions = array_map('trim', $versions);
            $versions_array = array();

            foreach($versions as $version) {
                $tmp = explode(',', $version);
                $versions_array[$tmp[0]] = $tmp[1];
            }

            $json = json_encode($versions_array);
            $class->setAttribute(self::FIELD_FORMATS, $json);
        }
        return true;
    }

    /**
     * Called on {$class_attribute.content} in content class template
     *
     * @return array
     */
    public function classAttributeContent($class)
    {
        $lines = array();
        $formats = "";
        $versions = json_decode($class->attribute(self::FIELD_FORMATS), true);
        if (!empty($versions) && is_array($versions)) {
            foreach($versions as $version_name => $version) {
                $lines[] = $version_name . ',' . $version;
            }
            $formats = join("\n", $lines);
        }
        return $formats;
    }

    /**
     * Validations for when a ContentObject containing this datatype
     * as an attribute is saved
     *
     * @param eZHTTPTool $http
     * @param mixed $base
     * @param object $contentObjectAttribute
     *
     * @return bool
     */
    public function validateObjectAttributeHTTPInput( $http, $base, $contentObjectAttribute )
    {
        return eZInputValidator::STATE_ACCEPTED;
    }

    /**
     * Fetches the HTTP input for the content object attribute.
     *
     * @param $http
     * @param $base
     * @param $attribute
     *
     * @return mixed
     */
    public function fetchObjectAttributeHTTPInput( $http, $base, $contentObjectAttribute )
    {
        $attributeId = $contentObjectAttribute->attribute('id');
        $data = array(
            'public_id' =>  $http->variable($base . '_media_id_' . $attributeId)
        );

        /*$extras = $http->variable($base . '_data_' . $attributeId);
        if ($extras) {
            $data += json_decode($extras, true);
        }*/
        $data['alttext'] = $http->variable($base . '_alttext_' . $attributeId, '');

        $container = ezpKernel::instance()->getServiceContainer();
        $provider = $container->get( 'netgen_remote_media.remote_media.provider' );

        $response = $provider->getRemoteResource($data['public_id'])->getArrayCopy();

        $contentClassAttribute = $contentObjectAttribute->contentClassAttribute();
        $attributeVariations = json_decode($contentClassAttribute->attribute(self::FIELD_FORMATS), true);

        $variations = array();
        foreach($attributeVariations as $name => $dimension) {
            $variations[$name] = array('x' => 0, 'y' => 0);
        }

        $response['variations'] = $variations;

        $value = $provider->getValueFromResponse($response);
        $contentObjectAttribute->setAttribute(self::FIELD_VALUE, json_encode($value));

        return true;
    }

    /**
     * Stores the datatype data to the database which is related to the
     * object attribute.
     *
     * Must return True if the value was stored correctly.
     *
     * @param $objectAttribute
     */
    function storeObjectAttribute( $objectAttribute )
    {
        // @todo this will also probably be neccessary to implement
    }

    /**
     * Check if attribute has content
     * Called before {$attribute.content} in templates delegates to
     * `objectAttributeContent` to actuall fetch the content
     *
     * @param object $attribute
     *
     * @return bool
     */
    public function hasObjectAttributeContent($attribute)
    {
        $value = $this->objectAttributeContent($attribute);
        return !empty($value->resourceId);
    }

    /**
     * Fetch content contained in this attribute when its stored
     * This method is triggered when a template states {$attribute.content}
     *
     * @param object $attribute
     *
     * @return \Netgen\Bundle\RemoteMediaBundle\Core\FieldType\RemoteMedia\Value
     */
    public function objectAttributeContent($attribute)
    {
        $value = new Value(json_decode($attribute->DataText), true);
        return $value;
    }

    /**
     * Performs necessary actions with attribute data after object is published,
     * it means that you have access to published nodes.
     *
     * Should return True if the value was stored correctly.
     * Might be transaction unsafe.
     *
     * @param $attribute
     * @param $contentObject
     * @param $publishedNodes
     */
    public function onPublish($attribute, $contentObject, $publishedNodes)
    {
        //$handler = $this->objectAttributeContent($attribute);
        //$handler->reportUsage($contentObject);
    }
}

eZDataType::register(
    NgRemoteMediaType::DATA_TYPE_STRING,
    'NgRemoteMediaType'
);
