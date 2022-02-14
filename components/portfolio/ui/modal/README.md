# Modal Components

## 使用コンポーネント
以下２つがモーダルに必要なコンポーネントです。
- Modal.vue
- ModalLayer.vue

※ModalGallery.vueは別ページで使用するコンポーネントなので、汎用的には使用しないでください。

## Usage
```
<template>
  <diV>
    <Modal :modal-show="show" @onModalTriggerClose="modalClose">
    ここにモーダル内コンテンツを入れる。
    </Modal>
    <ModalLayer :layer-show="show" @onModalLayerClose="modalLayerClose" />
  </diV>
</template>

export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    modalOpen() {
      this.show = true
    },
    modalClose() {
      this.show = false
    },
  },
}

```
※モーダル側にz-indexを付与しているので、使用するコンポーネントのルート直下で使用してください。

## Props
### Modal.vue
| props                | type     | default | note                                                                                   | 
| :------------------- | :------: | :-----: | -------------------------------------------------------------------------------------- | 
| modalShow            | Boolean  | false   | モーダルをオープンするならture、クローズするならfalseを入れてください。                                                                                        | 
| @onModalTriggerClose | Function | none    | モーダルを閉じるイベントなので、modalShowをfalseにするようなイベントを入れてください。 | 

### ModalLayer.vue
| props                | type     | default | note                                                                                   | 
| :------------------- | :------: | :-----: | -------------------------------------------------------------------------------------- | 
| layerShow            | Boolean  | false   |  モーダルをオープンするならture、クローズするならfalseを入れてください。                                                                                       | 
| @onModalLayerClose | Function | none    | モーダルレイヤーを閉じるイベントなので、layerShowをfalseにするようなイベントを入れてください。 | 

