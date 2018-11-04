// TypeScript file

class MsgPackCenter {
   

    static encode(sample: Object, ishex: boolean) {
        try {

            var spacer = "  ";
            var ar = JSON.stringify(sample, null, spacer)
            var json = ar;
            var data = JSON.parse(json);
            var buffer = msgpack.pack(data);
            var ishex = ishex;
            var binary = ishex ? MsgPackCenter.buffer_to_hex(buffer) : MsgPackCenter.buffer_to_array(buffer);
            return binary;
        } catch (e) {
            console.log(e + "");
        }
    }

    // encode();
    static buffer_to_hex(buffer) {
        return Array.prototype.map.call(buffer, function (val) {
            var hex = (val).toString(16).toUpperCase();
            if (val < 16) hex = "0" + hex;
            return hex;
        }).join(" ");
    }

    static buffer_to_array(buffer) {
        return JSON.stringify(Array.prototype.slice.apply(buffer)).replace(/,/g, ", ");
    }
    //  msgpack.unpack
    static decode(string) {
        try {
            var string = string;
            var ishex = string.search(/\[.*\]/) < 0;
            var array = ishex ? MsgPackCenter.hex_to_buffer(string) : MsgPackCenter.array_to_buffer(string);
            var buffer = new Uint8Array(array);
            var data = msgpack.unpack(buffer);
            var spacer = "  ";
            var json = JSON.stringify(data, null, spacer);
            return json;
        } catch (e) {
            console.log(e + "");
        }
    }

    static hex_to_buffer(string) {
        return string.split(/\s+/).filter(function (chr) {
            return (chr !== "");
        }).map(function (chr) {
            return parseInt(chr, 16);
        });
    }

    static array_to_buffer(string) {
        return JSON.parse(string);
    }

}