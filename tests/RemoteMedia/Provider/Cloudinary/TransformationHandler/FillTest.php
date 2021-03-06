<?php

namespace Netgen\Bundle\RemoteMediaBundle\Tests\RemoteMedia\Provider\Cloudinary\TransformationHandler;

use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\TransformationHandler\Fill;

class FillTest extends BaseTest
{
    /**
     * @var \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\TransformationHandler\Fill
     */
    protected $fill;

    public function setUp()
    {
        parent::setUp();
        $this->fill = new Fill();
    }

    public function testFillSimple()
    {
        $this->assertEquals(
            ['crop' => 'fill'],
            $this->fill->process($this->value, 'small')
        );
    }

    public function testFillWithDimensions()
    {
        $this->assertEquals(
            [
                'crop' => 'fill',
                'width' => 100,
                'height' => 200,
            ],
            $this->fill->process($this->value, 'small', [100, 200])
        );
    }
}
