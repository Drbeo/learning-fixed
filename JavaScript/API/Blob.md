`Blob` 对象表示一个不可变、原始数据的类文件对象。`Blob` 表示的不一定是JavaScript原生格式的数据。  
`File` 接口基于`Blob`，继承了 `blob` 的功能并将其扩展使其支持用户系统上的文件。

要从其他非blob对象和数据构造一个 `Blob`，请使用 `Blob()` 构造函数。  
要创建包含另一个` blob` 数据的多层 `blob`，请使用 `slice()` 方法。要获取用户文件系统上的文件对应的 `Blob` 对象，请参阅 `File` 文档。

#### 构造函数

```js
// Blob(blobParts[, options])
let blob = new Blob(array[optional], options[optional]);
```
#### Blob 对象属性

| 属性	 | 描述                     |
| ---    | ---                     |
| size	 | Blob 对象包含的字节数。(只读) |
| type	 | 一个字符串，Blob 对象所包含数据的 `MIME` 类型。如果类型未知，则该值为空字符串。 |

#### Blob 对象方法

| 属性	             | 描述                     |
| ---                | ---                     |
| Blob.slice(\[start\[, end\[, contentType]]])	 | 起始偏移量，结束偏移量，还有可选的 mime 类型。如果 mime 类型，没有设置，那么新的 Blob 对象的 mime 类型和父级一样。<br/>返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。 |
| Blob.stream()	     | 将Blob转换为ReadableStream，该ReadableStream可用于读取Blob内容。 |
| Blob.text()	     | 将Blob转换为流，并读取它以完成操作。 它返回一个USVString（文本） |
| Blob.arrayBuffer() | 将Blob转换为流，并读取它以完成操作。 它返回一个ArrayBuffer。 |