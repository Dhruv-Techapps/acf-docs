let xpathCode = document.querySelectorAll(".xpath li");
for (i = 0; i < xpathCode.length; i++) {
  let code = xpathCode[i].innerHTML;
  code = code.replace(/(?<node>[\/]+)(?<tagname>[\w|\*]+)(\[((?<outerfunc>[A-z|\-]*)\(((?<innerfunc>[A-z]+)\(\))?(\@(?<innerattr>[\w|\-]*))?,?("(?<funcvalue>[\w|\W]*?)")?\))?(="(?<outerfuncvalue>[\w|\W]+?)")?((\@(?<outerattr>[\w|\-]+))=?("(?<attrvalue>[\w|\W]*?)")?)?( (?<condition>(or|and)) ((\@(?<outerattr2>[\w|\-]+))=?("(?<attrvalue2>[\w|\W]*?)")?)?)?\])?/g, function () {
    let obj = arguments[arguments.length - 1];
    let result = `<span class='token tag'>`;
    result += `<span class='token punctuation'>${obj.node}</span>`;
    result += `<span class='token tag'>${obj.tagname}`;
    if (obj.outerfunc) {
      result += `<span class='token punctuation'>[</span>`;
      result += `<span class='token function'>${obj.outerfunc}<span class='token punctuation'>(</span>`;
      if (obj.innerfunc) {
        result += `<span class='token function'>${obj.innerfunc}<span class='token punctuation'>(</span>`;
        result += `<span class='token punctuation'>)</span></span>`;
        if (obj.funcvalue) {
          result += `<span class='token punctuation'>,</span>`;
          result += `<span class='token string'><span class='token punctuation'>"</span>${obj.funcvalue}<span class='token punctuation'>"</span></span>`;
        }
      } else if (obj.innerattr) {
        result += `<span class='token punctuation'>@</span><span class='token attr-name'>${obj.innerattr}</span>`;
        if (obj.funcvalue) {
          result += `<span class='token punctuation'>,</span>`;
          result += `<span class='token attr-value'><span class='token punctuation'>"</span>${obj.funcvalue}<span class='token punctuation'>"</span></span>`;
        }
      }

      result += `<span class='token punctuation'>)</span>`;
      if (obj.outerfuncvalue) {
        result += `<span class='token operator'>=</span>`;
        result += `<span class='token string'><span class='token punctuation'>"</span>${obj.outerfuncvalue}<span class='token punctuation'>"</span></span>`;
      }
      result += `</span>`;
      result += `<span class='token punctuation'>]</span>`;
    } else if (obj.outerattr) {
      result += `<span class='token punctuation'>[</span>`;
      result += `<span class='token punctuation'>@</span><span class='token attr-name'>${obj.outerattr}</span>`;
      if (obj.attrvalue) {
        result += `<span class='token operator'>=</span><span class='token attr-value'><span class='token punctuation'>"</span>${obj.attrvalue}<span class='token punctuation'>"</span></span>`
      }
      if (obj.condition) {
        result += `<span class="token operator"> ${obj.condition} </span>`;
        if (obj.outerattr2) {
          result += `<span class='token punctuation'>@</span><span class='token attr-name'>${obj.outerattr2}</span>`;
          if (obj.attrvalue2) {
            result += `<span class='token operator'>=</span><span class='token attr-value'><span class='token punctuation'>"</span>${obj.attrvalue2}<span class='token punctuation'>"</span></span>`
          }
        }
      }
      result += `<span class='token punctuation'>]</span>`;
    }
    result += `</span>`;
    result += `</span>`;
    return result;
  });

  code = code.replace(/(?<node>\/\/)(?<tagname>[A-z]+)\[(?<attr>\@?[A-z|\-|\(|\)]*)=?"?(?<value>[\w|\-|\s|#]*)?"?\]/g, function () {});
  xpathCode[i].innerHTML = code;
}