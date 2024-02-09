import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/runtime/pointers.ts";

interface PropsSearchBar {
  searchSpace: ObjectRef<string[]>;
  onadd: (ingredient: string) => void;
}

@template<PropsSearchBar>((_, props) => {
  const dropdownVisible = $$(false);

  return (
    <div class="search-box">
      <input
        type="text"
        class="search-input"
        placeholder="Search for ingredients"
      />
      <i
        class="fa-solid fa-magnifying-glass search-button"
        onclick={() => console.log("clicked")}
      ></i>
    </div>
  );
})
export class SearchBar extends Component {}
