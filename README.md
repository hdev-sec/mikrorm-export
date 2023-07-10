# Mikro-orm EntitySchema Export PoC

## Description

When trying to export entites created with `EntitySchema` we face the

```bash
TypeError: Cannot read properties of undefined (reading 'className')
```

---

### Installation

- `lib` folder simulates a library

      npm i && cd lib && npm i

### Step to reproduce

1.  ```
      cd lib/
      npm run initdb
    ```

    Works as expected

2.  ```
      cd {root}
      npm run initdb
    ```

    Throws the error
