import React, { useEffect, useRef } from 'react';
import './styles.css'; //

interface Props {
  handleChange: (x: string[]) => any;
}

function combine(array1: string[], array2: string[]) {
  const result = [];
  const length = Math.max(array1.length, array2.length);

  for (let i = 0; i < length; i++) {
    if (i < array1.length) {
      result.push(array1[i]);
    }
    if (i < array2.length) {
      result.push(array2[i]);
    }
  }

  return result;
}

export function Hanzi({ handleChange }: Props) {
  const hanzi_results_set_1_ref = useRef<HTMLDivElement>(null);
  const hanzi_results_set_2_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById('hanzi-reactcdn')) {
      const el = document.createElement('script');
      el.src = 'https://cdn.jsdelivr.net/gh/JWu-Git/hanziCDN/cdn.js';
      el.id = 'hanzi-reactcdn';
      document.body.appendChild(el);
    }
    const node = document.getElementById('sentinel_tracker');

    const config = { childList: true, subtree: true };

    const callback = (
      mutationList: MutationRecord[],
      observer: MutationObserver
    ) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const set_1: string[] = [];
          const set_2: string[] = [];
          for (
            let i = 0;
            i < hanzi_results_set_1_ref.current!.childNodes!.length;
            i++
          ) {
            set_1.push(
              hanzi_results_set_1_ref.current!.childNodes[i].textContent!
            );
          }
          for (
            let i = 0;
            i < hanzi_results_set_2_ref.current!.childNodes!.length;
            i++
          ) {
            set_2.push(
              hanzi_results_set_2_ref.current!.childNodes[i].textContent!
            );
          }

          let arr = combine(set_1, set_2);
          arr = Array.from(new Set(arr));
          handleChange(arr);
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(node as Node, config);

    return () => {
      observer.disconnect();
    };
  }, [handleChange]);

  return (
    <div className="hanzi-div">
      <div className="hanzi-drawingBoard hanzi-loading hanzi-div">
        <span>loading...</span>
      </div>
      <div className="hanzi-commands hanzi-div">
        <button className="hanzi-cmd hanzi-cmdUndo hanzi-div hanzi-marginright">
          Undo
        </button>
        <button className="hanzi-cmd hanzi-cmdClear hanzi-div">Clear</button>
      </div>
      <div
        className=" hanzi-hide hanzi-charPicker hanzi-LookupChars hanzi-div"
        id="hanzi_results_set_1"
        ref={hanzi_results_set_1_ref}
      ></div>
      <div
        className="hanzi-hide hanzi-charPicker hanzi-mmahLookupChars hanzi-div"
        id="hanzi_results_set_2"
        ref={hanzi_results_set_2_ref}
      ></div>
      <div className="hanzi-hide sentinel_tracker" id="sentinel_tracker"></div>
    </div>
  );
}
