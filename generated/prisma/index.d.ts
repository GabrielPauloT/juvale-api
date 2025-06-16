
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model absence
 * 
 */
export type absence = $Result.DefaultSelection<Prisma.$absencePayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model employee
 * 
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model snack
 * 
 */
export type snack = $Result.DefaultSelection<Prisma.$snackPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Absences
 * const absences = await prisma.absence.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Absences
   * const absences = await prisma.absence.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.absence`: Exposes CRUD operations for the **absence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absences
    * const absences = await prisma.absence.findMany()
    * ```
    */
  get absence(): Prisma.absenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.employeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snack`: Exposes CRUD operations for the **snack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snacks
    * const snacks = await prisma.snack.findMany()
    * ```
    */
  get snack(): Prisma.snackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    absence: 'absence',
    company: 'company',
    employee: 'employee',
    ticket: 'ticket',
    snack: 'snack',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "absence" | "company" | "employee" | "ticket" | "snack" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      absence: {
        payload: Prisma.$absencePayload<ExtArgs>
        fields: Prisma.absenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.absenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.absenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          findFirst: {
            args: Prisma.absenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.absenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          findMany: {
            args: Prisma.absenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>[]
          }
          create: {
            args: Prisma.absenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          createMany: {
            args: Prisma.absenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.absenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>[]
          }
          delete: {
            args: Prisma.absenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          update: {
            args: Prisma.absenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          deleteMany: {
            args: Prisma.absenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.absenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.absenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>[]
          }
          upsert: {
            args: Prisma.absenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencePayload>
          }
          aggregate: {
            args: Prisma.AbsenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsence>
          }
          groupBy: {
            args: Prisma.absenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.absenceCountArgs<ExtArgs>
            result: $Utils.Optional<AbsenceCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>
        fields: Prisma.employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      snack: {
        payload: Prisma.$snackPayload<ExtArgs>
        fields: Prisma.snackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.snackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.snackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          findFirst: {
            args: Prisma.snackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.snackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          findMany: {
            args: Prisma.snackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>[]
          }
          create: {
            args: Prisma.snackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          createMany: {
            args: Prisma.snackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.snackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>[]
          }
          delete: {
            args: Prisma.snackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          update: {
            args: Prisma.snackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          deleteMany: {
            args: Prisma.snackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.snackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.snackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>[]
          }
          upsert: {
            args: Prisma.snackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snackPayload>
          }
          aggregate: {
            args: Prisma.SnackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnack>
          }
          groupBy: {
            args: Prisma.snackGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnackGroupByOutputType>[]
          }
          count: {
            args: Prisma.snackCountArgs<ExtArgs>
            result: $Utils.Optional<SnackCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    absence?: absenceOmit
    company?: companyOmit
    employee?: employeeOmit
    ticket?: ticketOmit
    snack?: snackOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    employee: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | CompanyCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    absence: number
    ticket: number
    snack: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absence?: boolean | EmployeeCountOutputTypeCountAbsenceArgs
    ticket?: boolean | EmployeeCountOutputTypeCountTicketArgs
    snack?: boolean | EmployeeCountOutputTypeCountSnackArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAbsenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: absenceWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSnackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: snackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model absence
   */

  export type AggregateAbsence = {
    _count: AbsenceCountAggregateOutputType | null
    _avg: AbsenceAvgAggregateOutputType | null
    _sum: AbsenceSumAggregateOutputType | null
    _min: AbsenceMinAggregateOutputType | null
    _max: AbsenceMaxAggregateOutputType | null
  }

  export type AbsenceAvgAggregateOutputType = {
    id: number | null
  }

  export type AbsenceSumAggregateOutputType = {
    id: number | null
  }

  export type AbsenceMinAggregateOutputType = {
    id: number | null
    code_employee: string | null
    absence_date: Date | null
    created_at: Date | null
    last_modified: Date | null
    certificate_absence: boolean | null
  }

  export type AbsenceMaxAggregateOutputType = {
    id: number | null
    code_employee: string | null
    absence_date: Date | null
    created_at: Date | null
    last_modified: Date | null
    certificate_absence: boolean | null
  }

  export type AbsenceCountAggregateOutputType = {
    id: number
    code_employee: number
    absence_date: number
    created_at: number
    last_modified: number
    certificate_absence: number
    _all: number
  }


  export type AbsenceAvgAggregateInputType = {
    id?: true
  }

  export type AbsenceSumAggregateInputType = {
    id?: true
  }

  export type AbsenceMinAggregateInputType = {
    id?: true
    code_employee?: true
    absence_date?: true
    created_at?: true
    last_modified?: true
    certificate_absence?: true
  }

  export type AbsenceMaxAggregateInputType = {
    id?: true
    code_employee?: true
    absence_date?: true
    created_at?: true
    last_modified?: true
    certificate_absence?: true
  }

  export type AbsenceCountAggregateInputType = {
    id?: true
    code_employee?: true
    absence_date?: true
    created_at?: true
    last_modified?: true
    certificate_absence?: true
    _all?: true
  }

  export type AbsenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which absence to aggregate.
     */
    where?: absenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absenceOrderByWithRelationInput | absenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: absenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned absences
    **/
    _count?: true | AbsenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsenceMaxAggregateInputType
  }

  export type GetAbsenceAggregateType<T extends AbsenceAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsence[P]>
      : GetScalarType<T[P], AggregateAbsence[P]>
  }




  export type absenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: absenceWhereInput
    orderBy?: absenceOrderByWithAggregationInput | absenceOrderByWithAggregationInput[]
    by: AbsenceScalarFieldEnum[] | AbsenceScalarFieldEnum
    having?: absenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsenceCountAggregateInputType | true
    _avg?: AbsenceAvgAggregateInputType
    _sum?: AbsenceSumAggregateInputType
    _min?: AbsenceMinAggregateInputType
    _max?: AbsenceMaxAggregateInputType
  }

  export type AbsenceGroupByOutputType = {
    id: number
    code_employee: string
    absence_date: Date
    created_at: Date
    last_modified: Date | null
    certificate_absence: boolean
    _count: AbsenceCountAggregateOutputType | null
    _avg: AbsenceAvgAggregateOutputType | null
    _sum: AbsenceSumAggregateOutputType | null
    _min: AbsenceMinAggregateOutputType | null
    _max: AbsenceMaxAggregateOutputType | null
  }

  type GetAbsenceGroupByPayload<T extends absenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsenceGroupByOutputType[P]>
            : GetScalarType<T[P], AbsenceGroupByOutputType[P]>
        }
      >
    >


  export type absenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    absence_date?: boolean
    created_at?: boolean
    last_modified?: boolean
    certificate_absence?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absence"]>

  export type absenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    absence_date?: boolean
    created_at?: boolean
    last_modified?: boolean
    certificate_absence?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absence"]>

  export type absenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    absence_date?: boolean
    created_at?: boolean
    last_modified?: boolean
    certificate_absence?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absence"]>

  export type absenceSelectScalar = {
    id?: boolean
    code_employee?: boolean
    absence_date?: boolean
    created_at?: boolean
    last_modified?: boolean
    certificate_absence?: boolean
  }

  export type absenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code_employee" | "absence_date" | "created_at" | "last_modified" | "certificate_absence", ExtArgs["result"]["absence"]>
  export type absenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type absenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type absenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }

  export type $absencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "absence"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code_employee: string
      absence_date: Date
      created_at: Date
      last_modified: Date | null
      certificate_absence: boolean
    }, ExtArgs["result"]["absence"]>
    composites: {}
  }

  type absenceGetPayload<S extends boolean | null | undefined | absenceDefaultArgs> = $Result.GetResult<Prisma.$absencePayload, S>

  type absenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<absenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsenceCountAggregateInputType | true
    }

  export interface absenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['absence'], meta: { name: 'absence' } }
    /**
     * Find zero or one Absence that matches the filter.
     * @param {absenceFindUniqueArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends absenceFindUniqueArgs>(args: SelectSubset<T, absenceFindUniqueArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {absenceFindUniqueOrThrowArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends absenceFindUniqueOrThrowArgs>(args: SelectSubset<T, absenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceFindFirstArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends absenceFindFirstArgs>(args?: SelectSubset<T, absenceFindFirstArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceFindFirstOrThrowArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends absenceFindFirstOrThrowArgs>(args?: SelectSubset<T, absenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absences
     * const absences = await prisma.absence.findMany()
     * 
     * // Get first 10 Absences
     * const absences = await prisma.absence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absenceWithIdOnly = await prisma.absence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends absenceFindManyArgs>(args?: SelectSubset<T, absenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absence.
     * @param {absenceCreateArgs} args - Arguments to create a Absence.
     * @example
     * // Create one Absence
     * const Absence = await prisma.absence.create({
     *   data: {
     *     // ... data to create a Absence
     *   }
     * })
     * 
     */
    create<T extends absenceCreateArgs>(args: SelectSubset<T, absenceCreateArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absences.
     * @param {absenceCreateManyArgs} args - Arguments to create many Absences.
     * @example
     * // Create many Absences
     * const absence = await prisma.absence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends absenceCreateManyArgs>(args?: SelectSubset<T, absenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absences and returns the data saved in the database.
     * @param {absenceCreateManyAndReturnArgs} args - Arguments to create many Absences.
     * @example
     * // Create many Absences
     * const absence = await prisma.absence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absences and only return the `id`
     * const absenceWithIdOnly = await prisma.absence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends absenceCreateManyAndReturnArgs>(args?: SelectSubset<T, absenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absence.
     * @param {absenceDeleteArgs} args - Arguments to delete one Absence.
     * @example
     * // Delete one Absence
     * const Absence = await prisma.absence.delete({
     *   where: {
     *     // ... filter to delete one Absence
     *   }
     * })
     * 
     */
    delete<T extends absenceDeleteArgs>(args: SelectSubset<T, absenceDeleteArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absence.
     * @param {absenceUpdateArgs} args - Arguments to update one Absence.
     * @example
     * // Update one Absence
     * const absence = await prisma.absence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends absenceUpdateArgs>(args: SelectSubset<T, absenceUpdateArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absences.
     * @param {absenceDeleteManyArgs} args - Arguments to filter Absences to delete.
     * @example
     * // Delete a few Absences
     * const { count } = await prisma.absence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends absenceDeleteManyArgs>(args?: SelectSubset<T, absenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absences
     * const absence = await prisma.absence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends absenceUpdateManyArgs>(args: SelectSubset<T, absenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absences and returns the data updated in the database.
     * @param {absenceUpdateManyAndReturnArgs} args - Arguments to update many Absences.
     * @example
     * // Update many Absences
     * const absence = await prisma.absence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absences and only return the `id`
     * const absenceWithIdOnly = await prisma.absence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends absenceUpdateManyAndReturnArgs>(args: SelectSubset<T, absenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absence.
     * @param {absenceUpsertArgs} args - Arguments to update or create a Absence.
     * @example
     * // Update or create a Absence
     * const absence = await prisma.absence.upsert({
     *   create: {
     *     // ... data to create a Absence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absence we want to update
     *   }
     * })
     */
    upsert<T extends absenceUpsertArgs>(args: SelectSubset<T, absenceUpsertArgs<ExtArgs>>): Prisma__absenceClient<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceCountArgs} args - Arguments to filter Absences to count.
     * @example
     * // Count the number of Absences
     * const count = await prisma.absence.count({
     *   where: {
     *     // ... the filter for the Absences we want to count
     *   }
     * })
    **/
    count<T extends absenceCountArgs>(
      args?: Subset<T, absenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsenceAggregateArgs>(args: Subset<T, AbsenceAggregateArgs>): Prisma.PrismaPromise<GetAbsenceAggregateType<T>>

    /**
     * Group by Absence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends absenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: absenceGroupByArgs['orderBy'] }
        : { orderBy?: absenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, absenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the absence model
   */
  readonly fields: absenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for absence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__absenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeeDefaultArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the absence model
   */
  interface absenceFieldRefs {
    readonly id: FieldRef<"absence", 'Int'>
    readonly code_employee: FieldRef<"absence", 'String'>
    readonly absence_date: FieldRef<"absence", 'DateTime'>
    readonly created_at: FieldRef<"absence", 'DateTime'>
    readonly last_modified: FieldRef<"absence", 'DateTime'>
    readonly certificate_absence: FieldRef<"absence", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * absence findUnique
   */
  export type absenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter, which absence to fetch.
     */
    where: absenceWhereUniqueInput
  }

  /**
   * absence findUniqueOrThrow
   */
  export type absenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter, which absence to fetch.
     */
    where: absenceWhereUniqueInput
  }

  /**
   * absence findFirst
   */
  export type absenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter, which absence to fetch.
     */
    where?: absenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absenceOrderByWithRelationInput | absenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for absences.
     */
    cursor?: absenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of absences.
     */
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * absence findFirstOrThrow
   */
  export type absenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter, which absence to fetch.
     */
    where?: absenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absenceOrderByWithRelationInput | absenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for absences.
     */
    cursor?: absenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of absences.
     */
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * absence findMany
   */
  export type absenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where?: absenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absenceOrderByWithRelationInput | absenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing absences.
     */
    cursor?: absenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * absence create
   */
  export type absenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * The data needed to create a absence.
     */
    data: XOR<absenceCreateInput, absenceUncheckedCreateInput>
  }

  /**
   * absence createMany
   */
  export type absenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many absences.
     */
    data: absenceCreateManyInput | absenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * absence createManyAndReturn
   */
  export type absenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * The data used to create many absences.
     */
    data: absenceCreateManyInput | absenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * absence update
   */
  export type absenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * The data needed to update a absence.
     */
    data: XOR<absenceUpdateInput, absenceUncheckedUpdateInput>
    /**
     * Choose, which absence to update.
     */
    where: absenceWhereUniqueInput
  }

  /**
   * absence updateMany
   */
  export type absenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update absences.
     */
    data: XOR<absenceUpdateManyMutationInput, absenceUncheckedUpdateManyInput>
    /**
     * Filter which absences to update
     */
    where?: absenceWhereInput
    /**
     * Limit how many absences to update.
     */
    limit?: number
  }

  /**
   * absence updateManyAndReturn
   */
  export type absenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * The data used to update absences.
     */
    data: XOR<absenceUpdateManyMutationInput, absenceUncheckedUpdateManyInput>
    /**
     * Filter which absences to update
     */
    where?: absenceWhereInput
    /**
     * Limit how many absences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * absence upsert
   */
  export type absenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * The filter to search for the absence to update in case it exists.
     */
    where: absenceWhereUniqueInput
    /**
     * In case the absence found by the `where` argument doesn't exist, create a new absence with this data.
     */
    create: XOR<absenceCreateInput, absenceUncheckedCreateInput>
    /**
     * In case the absence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<absenceUpdateInput, absenceUncheckedUpdateInput>
  }

  /**
   * absence delete
   */
  export type absenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    /**
     * Filter which absence to delete.
     */
    where: absenceWhereUniqueInput
  }

  /**
   * absence deleteMany
   */
  export type absenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which absences to delete
     */
    where?: absenceWhereInput
    /**
     * Limit how many absences to delete.
     */
    limit?: number
  }

  /**
   * absence without action
   */
  export type absenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    last_modified: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    last_modified?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    last_modified?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    last_modified?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    last_modified: Date | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | company$employeeArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    last_modified?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    last_modified?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    last_modified?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "last_modified", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | company$employeeArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      last_modified: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends company$employeeArgs<ExtArgs> = {}>(args?: Subset<T, company$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'Int'>
    readonly name: FieldRef<"company", 'String'>
    readonly created_at: FieldRef<"company", 'DateTime'>
    readonly last_modified: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.employee
   */
  export type company$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    code_company: number | null
    salary: Decimal | null
  }

  export type EmployeeSumAggregateOutputType = {
    code_company: number | null
    salary: Decimal | null
  }

  export type EmployeeMinAggregateOutputType = {
    code_employee: string | null
    code_company: number | null
    name: string | null
    job_description: string | null
    salary: Decimal | null
    created_at: Date | null
    last_modified: Date | null
    enabled: boolean | null
  }

  export type EmployeeMaxAggregateOutputType = {
    code_employee: string | null
    code_company: number | null
    name: string | null
    job_description: string | null
    salary: Decimal | null
    created_at: Date | null
    last_modified: Date | null
    enabled: boolean | null
  }

  export type EmployeeCountAggregateOutputType = {
    code_employee: number
    code_company: number
    name: number
    job_description: number
    salary: number
    created_at: number
    last_modified: number
    enabled: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    code_company?: true
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    code_company?: true
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    code_employee?: true
    code_company?: true
    name?: true
    job_description?: true
    salary?: true
    created_at?: true
    last_modified?: true
    enabled?: true
  }

  export type EmployeeMaxAggregateInputType = {
    code_employee?: true
    code_company?: true
    name?: true
    job_description?: true
    salary?: true
    created_at?: true
    last_modified?: true
    enabled?: true
  }

  export type EmployeeCountAggregateInputType = {
    code_employee?: true
    code_company?: true
    name?: true
    job_description?: true
    salary?: true
    created_at?: true
    last_modified?: true
    enabled?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal
    created_at: Date
    last_modified: Date | null
    enabled: boolean
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code_employee?: boolean
    code_company?: boolean
    name?: boolean
    job_description?: boolean
    salary?: boolean
    created_at?: boolean
    last_modified?: boolean
    enabled?: boolean
    absence?: boolean | employee$absenceArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    ticket?: boolean | employee$ticketArgs<ExtArgs>
    snack?: boolean | employee$snackArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code_employee?: boolean
    code_company?: boolean
    name?: boolean
    job_description?: boolean
    salary?: boolean
    created_at?: boolean
    last_modified?: boolean
    enabled?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code_employee?: boolean
    code_company?: boolean
    name?: boolean
    job_description?: boolean
    salary?: boolean
    created_at?: boolean
    last_modified?: boolean
    enabled?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectScalar = {
    code_employee?: boolean
    code_company?: boolean
    name?: boolean
    job_description?: boolean
    salary?: boolean
    created_at?: boolean
    last_modified?: boolean
    enabled?: boolean
  }

  export type employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code_employee" | "code_company" | "name" | "job_description" | "salary" | "created_at" | "last_modified" | "enabled", ExtArgs["result"]["employee"]>
  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absence?: boolean | employee$absenceArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    ticket?: boolean | employee$ticketArgs<ExtArgs>
    snack?: boolean | employee$snackArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type employeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee"
    objects: {
      absence: Prisma.$absencePayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
      ticket: Prisma.$ticketPayload<ExtArgs>[]
      snack: Prisma.$snackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code_employee: string
      code_company: number
      name: string
      job_description: string
      salary: Prisma.Decimal
      created_at: Date
      last_modified: Date | null
      enabled: boolean
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<Prisma.$employeePayload, S>

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee'], meta: { name: 'employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeeFindUniqueArgs>(args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeeFindFirstArgs>(args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `code_employee`
     * const employeeWithCode_employeeOnly = await prisma.employee.findMany({ select: { code_employee: true } })
     * 
     */
    findMany<T extends employeeFindManyArgs>(args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends employeeCreateArgs>(args: SelectSubset<T, employeeCreateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeeCreateManyArgs>(args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `code_employee`
     * const employeeWithCode_employeeOnly = await prisma.employee.createManyAndReturn({
     *   select: { code_employee: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeeCreateManyAndReturnArgs>(args?: SelectSubset<T, employeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends employeeDeleteArgs>(args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeeUpdateArgs>(args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeeDeleteManyArgs>(args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeeUpdateManyArgs>(args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `code_employee`
     * const employeeWithCode_employeeOnly = await prisma.employee.updateManyAndReturn({
     *   select: { code_employee: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends employeeUpdateManyAndReturnArgs>(args: SelectSubset<T, employeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends employeeUpsertArgs>(args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee model
   */
  readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absence<T extends employee$absenceArgs<ExtArgs> = {}>(args?: Subset<T, employee$absenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends employee$ticketArgs<ExtArgs> = {}>(args?: Subset<T, employee$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snack<T extends employee$snackArgs<ExtArgs> = {}>(args?: Subset<T, employee$snackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly code_employee: FieldRef<"employee", 'String'>
    readonly code_company: FieldRef<"employee", 'Int'>
    readonly name: FieldRef<"employee", 'String'>
    readonly job_description: FieldRef<"employee", 'String'>
    readonly salary: FieldRef<"employee", 'Decimal'>
    readonly created_at: FieldRef<"employee", 'DateTime'>
    readonly last_modified: FieldRef<"employee", 'DateTime'>
    readonly enabled: FieldRef<"employee", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>
  }

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee createManyAndReturn
   */
  export type employeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employee updateManyAndReturn
   */
  export type employeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
  }

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employee.absence
   */
  export type employee$absenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absence
     */
    select?: absenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absence
     */
    omit?: absenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absenceInclude<ExtArgs> | null
    where?: absenceWhereInput
    orderBy?: absenceOrderByWithRelationInput | absenceOrderByWithRelationInput[]
    cursor?: absenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * employee.ticket
   */
  export type employee$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * employee.snack
   */
  export type employee$snackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    where?: snackWhereInput
    orderBy?: snackOrderByWithRelationInput | snackOrderByWithRelationInput[]
    cursor?: snackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnackScalarFieldEnum | SnackScalarFieldEnum[]
  }

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    code_employee: string | null
    value: Decimal | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    code_employee: string | null
    value: Decimal | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    code_employee: number
    value: number
    created_at: number
    last_modified: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    code_employee: string
    value: Decimal
    created_at: Date
    last_modified: Date | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type ticketSelectScalar = {
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
  }

  export type ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code_employee" | "value" | "created_at" | "last_modified", ExtArgs["result"]["ticket"]>
  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type ticketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type ticketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code_employee: string
      value: Prisma.Decimal
      created_at: Date
      last_modified: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeeDefaultArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<"ticket", 'Int'>
    readonly code_employee: FieldRef<"ticket", 'String'>
    readonly value: FieldRef<"ticket", 'Decimal'>
    readonly created_at: FieldRef<"ticket", 'DateTime'>
    readonly last_modified: FieldRef<"ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket createManyAndReturn
   */
  export type ticketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * ticket updateManyAndReturn
   */
  export type ticketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model snack
   */

  export type AggregateSnack = {
    _count: SnackCountAggregateOutputType | null
    _avg: SnackAvgAggregateOutputType | null
    _sum: SnackSumAggregateOutputType | null
    _min: SnackMinAggregateOutputType | null
    _max: SnackMaxAggregateOutputType | null
  }

  export type SnackAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type SnackSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type SnackMinAggregateOutputType = {
    id: number | null
    code_employee: string | null
    value: Decimal | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type SnackMaxAggregateOutputType = {
    id: number | null
    code_employee: string | null
    value: Decimal | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type SnackCountAggregateOutputType = {
    id: number
    code_employee: number
    value: number
    created_at: number
    last_modified: number
    _all: number
  }


  export type SnackAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type SnackSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type SnackMinAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
  }

  export type SnackMaxAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
  }

  export type SnackCountAggregateInputType = {
    id?: true
    code_employee?: true
    value?: true
    created_at?: true
    last_modified?: true
    _all?: true
  }

  export type SnackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which snack to aggregate.
     */
    where?: snackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of snacks to fetch.
     */
    orderBy?: snackOrderByWithRelationInput | snackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: snackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` snacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` snacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned snacks
    **/
    _count?: true | SnackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnackMaxAggregateInputType
  }

  export type GetSnackAggregateType<T extends SnackAggregateArgs> = {
        [P in keyof T & keyof AggregateSnack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnack[P]>
      : GetScalarType<T[P], AggregateSnack[P]>
  }




  export type snackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: snackWhereInput
    orderBy?: snackOrderByWithAggregationInput | snackOrderByWithAggregationInput[]
    by: SnackScalarFieldEnum[] | SnackScalarFieldEnum
    having?: snackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnackCountAggregateInputType | true
    _avg?: SnackAvgAggregateInputType
    _sum?: SnackSumAggregateInputType
    _min?: SnackMinAggregateInputType
    _max?: SnackMaxAggregateInputType
  }

  export type SnackGroupByOutputType = {
    id: number
    code_employee: string
    value: Decimal
    created_at: Date
    last_modified: Date | null
    _count: SnackCountAggregateOutputType | null
    _avg: SnackAvgAggregateOutputType | null
    _sum: SnackSumAggregateOutputType | null
    _min: SnackMinAggregateOutputType | null
    _max: SnackMaxAggregateOutputType | null
  }

  type GetSnackGroupByPayload<T extends snackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnackGroupByOutputType[P]>
            : GetScalarType<T[P], SnackGroupByOutputType[P]>
        }
      >
    >


  export type snackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snack"]>

  export type snackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snack"]>

  export type snackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snack"]>

  export type snackSelectScalar = {
    id?: boolean
    code_employee?: boolean
    value?: boolean
    created_at?: boolean
    last_modified?: boolean
  }

  export type snackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code_employee" | "value" | "created_at" | "last_modified", ExtArgs["result"]["snack"]>
  export type snackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type snackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }
  export type snackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>
  }

  export type $snackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "snack"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code_employee: string
      value: Prisma.Decimal
      created_at: Date
      last_modified: Date | null
    }, ExtArgs["result"]["snack"]>
    composites: {}
  }

  type snackGetPayload<S extends boolean | null | undefined | snackDefaultArgs> = $Result.GetResult<Prisma.$snackPayload, S>

  type snackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<snackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnackCountAggregateInputType | true
    }

  export interface snackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['snack'], meta: { name: 'snack' } }
    /**
     * Find zero or one Snack that matches the filter.
     * @param {snackFindUniqueArgs} args - Arguments to find a Snack
     * @example
     * // Get one Snack
     * const snack = await prisma.snack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends snackFindUniqueArgs>(args: SelectSubset<T, snackFindUniqueArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {snackFindUniqueOrThrowArgs} args - Arguments to find a Snack
     * @example
     * // Get one Snack
     * const snack = await prisma.snack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends snackFindUniqueOrThrowArgs>(args: SelectSubset<T, snackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackFindFirstArgs} args - Arguments to find a Snack
     * @example
     * // Get one Snack
     * const snack = await prisma.snack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends snackFindFirstArgs>(args?: SelectSubset<T, snackFindFirstArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackFindFirstOrThrowArgs} args - Arguments to find a Snack
     * @example
     * // Get one Snack
     * const snack = await prisma.snack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends snackFindFirstOrThrowArgs>(args?: SelectSubset<T, snackFindFirstOrThrowArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snacks
     * const snacks = await prisma.snack.findMany()
     * 
     * // Get first 10 Snacks
     * const snacks = await prisma.snack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snackWithIdOnly = await prisma.snack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends snackFindManyArgs>(args?: SelectSubset<T, snackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snack.
     * @param {snackCreateArgs} args - Arguments to create a Snack.
     * @example
     * // Create one Snack
     * const Snack = await prisma.snack.create({
     *   data: {
     *     // ... data to create a Snack
     *   }
     * })
     * 
     */
    create<T extends snackCreateArgs>(args: SelectSubset<T, snackCreateArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snacks.
     * @param {snackCreateManyArgs} args - Arguments to create many Snacks.
     * @example
     * // Create many Snacks
     * const snack = await prisma.snack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends snackCreateManyArgs>(args?: SelectSubset<T, snackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snacks and returns the data saved in the database.
     * @param {snackCreateManyAndReturnArgs} args - Arguments to create many Snacks.
     * @example
     * // Create many Snacks
     * const snack = await prisma.snack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snacks and only return the `id`
     * const snackWithIdOnly = await prisma.snack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends snackCreateManyAndReturnArgs>(args?: SelectSubset<T, snackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snack.
     * @param {snackDeleteArgs} args - Arguments to delete one Snack.
     * @example
     * // Delete one Snack
     * const Snack = await prisma.snack.delete({
     *   where: {
     *     // ... filter to delete one Snack
     *   }
     * })
     * 
     */
    delete<T extends snackDeleteArgs>(args: SelectSubset<T, snackDeleteArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snack.
     * @param {snackUpdateArgs} args - Arguments to update one Snack.
     * @example
     * // Update one Snack
     * const snack = await prisma.snack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends snackUpdateArgs>(args: SelectSubset<T, snackUpdateArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snacks.
     * @param {snackDeleteManyArgs} args - Arguments to filter Snacks to delete.
     * @example
     * // Delete a few Snacks
     * const { count } = await prisma.snack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends snackDeleteManyArgs>(args?: SelectSubset<T, snackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snacks
     * const snack = await prisma.snack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends snackUpdateManyArgs>(args: SelectSubset<T, snackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snacks and returns the data updated in the database.
     * @param {snackUpdateManyAndReturnArgs} args - Arguments to update many Snacks.
     * @example
     * // Update many Snacks
     * const snack = await prisma.snack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snacks and only return the `id`
     * const snackWithIdOnly = await prisma.snack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends snackUpdateManyAndReturnArgs>(args: SelectSubset<T, snackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snack.
     * @param {snackUpsertArgs} args - Arguments to update or create a Snack.
     * @example
     * // Update or create a Snack
     * const snack = await prisma.snack.upsert({
     *   create: {
     *     // ... data to create a Snack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snack we want to update
     *   }
     * })
     */
    upsert<T extends snackUpsertArgs>(args: SelectSubset<T, snackUpsertArgs<ExtArgs>>): Prisma__snackClient<$Result.GetResult<Prisma.$snackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackCountArgs} args - Arguments to filter Snacks to count.
     * @example
     * // Count the number of Snacks
     * const count = await prisma.snack.count({
     *   where: {
     *     // ... the filter for the Snacks we want to count
     *   }
     * })
    **/
    count<T extends snackCountArgs>(
      args?: Subset<T, snackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnackAggregateArgs>(args: Subset<T, SnackAggregateArgs>): Prisma.PrismaPromise<GetSnackAggregateType<T>>

    /**
     * Group by Snack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends snackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: snackGroupByArgs['orderBy'] }
        : { orderBy?: snackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, snackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the snack model
   */
  readonly fields: snackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for snack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__snackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeeDefaultArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the snack model
   */
  interface snackFieldRefs {
    readonly id: FieldRef<"snack", 'Int'>
    readonly code_employee: FieldRef<"snack", 'String'>
    readonly value: FieldRef<"snack", 'Decimal'>
    readonly created_at: FieldRef<"snack", 'DateTime'>
    readonly last_modified: FieldRef<"snack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * snack findUnique
   */
  export type snackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter, which snack to fetch.
     */
    where: snackWhereUniqueInput
  }

  /**
   * snack findUniqueOrThrow
   */
  export type snackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter, which snack to fetch.
     */
    where: snackWhereUniqueInput
  }

  /**
   * snack findFirst
   */
  export type snackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter, which snack to fetch.
     */
    where?: snackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of snacks to fetch.
     */
    orderBy?: snackOrderByWithRelationInput | snackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for snacks.
     */
    cursor?: snackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` snacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` snacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of snacks.
     */
    distinct?: SnackScalarFieldEnum | SnackScalarFieldEnum[]
  }

  /**
   * snack findFirstOrThrow
   */
  export type snackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter, which snack to fetch.
     */
    where?: snackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of snacks to fetch.
     */
    orderBy?: snackOrderByWithRelationInput | snackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for snacks.
     */
    cursor?: snackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` snacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` snacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of snacks.
     */
    distinct?: SnackScalarFieldEnum | SnackScalarFieldEnum[]
  }

  /**
   * snack findMany
   */
  export type snackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter, which snacks to fetch.
     */
    where?: snackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of snacks to fetch.
     */
    orderBy?: snackOrderByWithRelationInput | snackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing snacks.
     */
    cursor?: snackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` snacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` snacks.
     */
    skip?: number
    distinct?: SnackScalarFieldEnum | SnackScalarFieldEnum[]
  }

  /**
   * snack create
   */
  export type snackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * The data needed to create a snack.
     */
    data: XOR<snackCreateInput, snackUncheckedCreateInput>
  }

  /**
   * snack createMany
   */
  export type snackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many snacks.
     */
    data: snackCreateManyInput | snackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * snack createManyAndReturn
   */
  export type snackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * The data used to create many snacks.
     */
    data: snackCreateManyInput | snackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * snack update
   */
  export type snackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * The data needed to update a snack.
     */
    data: XOR<snackUpdateInput, snackUncheckedUpdateInput>
    /**
     * Choose, which snack to update.
     */
    where: snackWhereUniqueInput
  }

  /**
   * snack updateMany
   */
  export type snackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update snacks.
     */
    data: XOR<snackUpdateManyMutationInput, snackUncheckedUpdateManyInput>
    /**
     * Filter which snacks to update
     */
    where?: snackWhereInput
    /**
     * Limit how many snacks to update.
     */
    limit?: number
  }

  /**
   * snack updateManyAndReturn
   */
  export type snackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * The data used to update snacks.
     */
    data: XOR<snackUpdateManyMutationInput, snackUncheckedUpdateManyInput>
    /**
     * Filter which snacks to update
     */
    where?: snackWhereInput
    /**
     * Limit how many snacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * snack upsert
   */
  export type snackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * The filter to search for the snack to update in case it exists.
     */
    where: snackWhereUniqueInput
    /**
     * In case the snack found by the `where` argument doesn't exist, create a new snack with this data.
     */
    create: XOR<snackCreateInput, snackUncheckedCreateInput>
    /**
     * In case the snack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<snackUpdateInput, snackUncheckedUpdateInput>
  }

  /**
   * snack delete
   */
  export type snackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
    /**
     * Filter which snack to delete.
     */
    where: snackWhereUniqueInput
  }

  /**
   * snack deleteMany
   */
  export type snackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which snacks to delete
     */
    where?: snackWhereInput
    /**
     * Limit how many snacks to delete.
     */
    limit?: number
  }

  /**
   * snack without action
   */
  export type snackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the snack
     */
    select?: snackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the snack
     */
    omit?: snackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snackInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    last_modified: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    created_at: number
    last_modified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_modified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_modified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_modified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    created_at: Date
    last_modified: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_modified?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_modified?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_modified?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_modified?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "created_at" | "last_modified", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      created_at: Date
      last_modified: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly last_modified: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AbsenceScalarFieldEnum: {
    id: 'id',
    code_employee: 'code_employee',
    absence_date: 'absence_date',
    created_at: 'created_at',
    last_modified: 'last_modified',
    certificate_absence: 'certificate_absence'
  };

  export type AbsenceScalarFieldEnum = (typeof AbsenceScalarFieldEnum)[keyof typeof AbsenceScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    last_modified: 'last_modified'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    code_employee: 'code_employee',
    code_company: 'code_company',
    name: 'name',
    job_description: 'job_description',
    salary: 'salary',
    created_at: 'created_at',
    last_modified: 'last_modified',
    enabled: 'enabled'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    code_employee: 'code_employee',
    value: 'value',
    created_at: 'created_at',
    last_modified: 'last_modified'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SnackScalarFieldEnum: {
    id: 'id',
    code_employee: 'code_employee',
    value: 'value',
    created_at: 'created_at',
    last_modified: 'last_modified'
  };

  export type SnackScalarFieldEnum = (typeof SnackScalarFieldEnum)[keyof typeof SnackScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    last_modified: 'last_modified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type absenceWhereInput = {
    AND?: absenceWhereInput | absenceWhereInput[]
    OR?: absenceWhereInput[]
    NOT?: absenceWhereInput | absenceWhereInput[]
    id?: IntFilter<"absence"> | number
    code_employee?: StringFilter<"absence"> | string
    absence_date?: DateTimeFilter<"absence"> | Date | string
    created_at?: DateTimeFilter<"absence"> | Date | string
    last_modified?: DateTimeNullableFilter<"absence"> | Date | string | null
    certificate_absence?: BoolFilter<"absence"> | boolean
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }

  export type absenceOrderByWithRelationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    absence_date?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    certificate_absence?: SortOrder
    employee?: employeeOrderByWithRelationInput
  }

  export type absenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: absenceWhereInput | absenceWhereInput[]
    OR?: absenceWhereInput[]
    NOT?: absenceWhereInput | absenceWhereInput[]
    code_employee?: StringFilter<"absence"> | string
    absence_date?: DateTimeFilter<"absence"> | Date | string
    created_at?: DateTimeFilter<"absence"> | Date | string
    last_modified?: DateTimeNullableFilter<"absence"> | Date | string | null
    certificate_absence?: BoolFilter<"absence"> | boolean
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }, "id">

  export type absenceOrderByWithAggregationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    absence_date?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    certificate_absence?: SortOrder
    _count?: absenceCountOrderByAggregateInput
    _avg?: absenceAvgOrderByAggregateInput
    _max?: absenceMaxOrderByAggregateInput
    _min?: absenceMinOrderByAggregateInput
    _sum?: absenceSumOrderByAggregateInput
  }

  export type absenceScalarWhereWithAggregatesInput = {
    AND?: absenceScalarWhereWithAggregatesInput | absenceScalarWhereWithAggregatesInput[]
    OR?: absenceScalarWhereWithAggregatesInput[]
    NOT?: absenceScalarWhereWithAggregatesInput | absenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"absence"> | number
    code_employee?: StringWithAggregatesFilter<"absence"> | string
    absence_date?: DateTimeWithAggregatesFilter<"absence"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"absence"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"absence"> | Date | string | null
    certificate_absence?: BoolWithAggregatesFilter<"absence"> | boolean
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: IntFilter<"company"> | number
    name?: StringFilter<"company"> | string
    created_at?: DateTimeFilter<"company"> | Date | string
    last_modified?: DateTimeNullableFilter<"company"> | Date | string | null
    employee?: EmployeeListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    employee?: employeeOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    created_at?: DateTimeFilter<"company"> | Date | string
    last_modified?: DateTimeNullableFilter<"company"> | Date | string | null
    employee?: EmployeeListRelationFilter
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"company"> | number
    name?: StringWithAggregatesFilter<"company"> | string
    created_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
  }

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    code_employee?: StringFilter<"employee"> | string
    code_company?: IntFilter<"employee"> | number
    name?: StringFilter<"employee"> | string
    job_description?: StringFilter<"employee"> | string
    salary?: DecimalFilter<"employee"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"employee"> | Date | string
    last_modified?: DateTimeNullableFilter<"employee"> | Date | string | null
    enabled?: BoolFilter<"employee"> | boolean
    absence?: AbsenceListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    ticket?: TicketListRelationFilter
    snack?: SnackListRelationFilter
  }

  export type employeeOrderByWithRelationInput = {
    code_employee?: SortOrder
    code_company?: SortOrder
    name?: SortOrder
    job_description?: SortOrder
    salary?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    enabled?: SortOrder
    absence?: absenceOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
    ticket?: ticketOrderByRelationAggregateInput
    snack?: snackOrderByRelationAggregateInput
  }

  export type employeeWhereUniqueInput = Prisma.AtLeast<{
    code_employee?: string
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    code_company?: IntFilter<"employee"> | number
    name?: StringFilter<"employee"> | string
    job_description?: StringFilter<"employee"> | string
    salary?: DecimalFilter<"employee"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"employee"> | Date | string
    last_modified?: DateTimeNullableFilter<"employee"> | Date | string | null
    enabled?: BoolFilter<"employee"> | boolean
    absence?: AbsenceListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    ticket?: TicketListRelationFilter
    snack?: SnackListRelationFilter
  }, "code_employee">

  export type employeeOrderByWithAggregationInput = {
    code_employee?: SortOrder
    code_company?: SortOrder
    name?: SortOrder
    job_description?: SortOrder
    salary?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    enabled?: SortOrder
    _count?: employeeCountOrderByAggregateInput
    _avg?: employeeAvgOrderByAggregateInput
    _max?: employeeMaxOrderByAggregateInput
    _min?: employeeMinOrderByAggregateInput
    _sum?: employeeSumOrderByAggregateInput
  }

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    OR?: employeeScalarWhereWithAggregatesInput[]
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    code_employee?: StringWithAggregatesFilter<"employee"> | string
    code_company?: IntWithAggregatesFilter<"employee"> | number
    name?: StringWithAggregatesFilter<"employee"> | string
    job_description?: StringWithAggregatesFilter<"employee"> | string
    salary?: DecimalWithAggregatesFilter<"employee"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"employee"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"employee"> | Date | string | null
    enabled?: BoolWithAggregatesFilter<"employee"> | boolean
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    id?: IntFilter<"ticket"> | number
    code_employee?: StringFilter<"ticket"> | string
    value?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"ticket"> | Date | string
    last_modified?: DateTimeNullableFilter<"ticket"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    employee?: employeeOrderByWithRelationInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    code_employee?: StringFilter<"ticket"> | string
    value?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"ticket"> | Date | string
    last_modified?: DateTimeNullableFilter<"ticket"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }, "id">

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticket"> | number
    code_employee?: StringWithAggregatesFilter<"ticket"> | string
    value?: DecimalWithAggregatesFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"ticket"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"ticket"> | Date | string | null
  }

  export type snackWhereInput = {
    AND?: snackWhereInput | snackWhereInput[]
    OR?: snackWhereInput[]
    NOT?: snackWhereInput | snackWhereInput[]
    id?: IntFilter<"snack"> | number
    code_employee?: StringFilter<"snack"> | string
    value?: DecimalFilter<"snack"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"snack"> | Date | string
    last_modified?: DateTimeNullableFilter<"snack"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }

  export type snackOrderByWithRelationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    employee?: employeeOrderByWithRelationInput
  }

  export type snackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: snackWhereInput | snackWhereInput[]
    OR?: snackWhereInput[]
    NOT?: snackWhereInput | snackWhereInput[]
    code_employee?: StringFilter<"snack"> | string
    value?: DecimalFilter<"snack"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"snack"> | Date | string
    last_modified?: DateTimeNullableFilter<"snack"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
  }, "id">

  export type snackOrderByWithAggregationInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    _count?: snackCountOrderByAggregateInput
    _avg?: snackAvgOrderByAggregateInput
    _max?: snackMaxOrderByAggregateInput
    _min?: snackMinOrderByAggregateInput
    _sum?: snackSumOrderByAggregateInput
  }

  export type snackScalarWhereWithAggregatesInput = {
    AND?: snackScalarWhereWithAggregatesInput | snackScalarWhereWithAggregatesInput[]
    OR?: snackScalarWhereWithAggregatesInput[]
    NOT?: snackScalarWhereWithAggregatesInput | snackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"snack"> | number
    code_employee?: StringWithAggregatesFilter<"snack"> | string
    value?: DecimalWithAggregatesFilter<"snack"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"snack"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"snack"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    last_modified?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    last_modified?: DateTimeNullableFilter<"user"> | Date | string | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    last_modified?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type absenceCreateInput = {
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
    employee: employeeCreateNestedOneWithoutAbsenceInput
  }

  export type absenceUncheckedCreateInput = {
    id?: number
    code_employee: string
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
  }

  export type absenceUpdateInput = {
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
    employee?: employeeUpdateOneRequiredWithoutAbsenceNestedInput
  }

  export type absenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absenceCreateManyInput = {
    id?: number
    code_employee: string
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
  }

  export type absenceUpdateManyMutationInput = {
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type companyCreateInput = {
    name: string
    created_at?: Date | string
    last_modified?: Date | string | null
    employee?: employeeCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    last_modified?: Date | string | null
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: employeeUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type companyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type employeeCreateInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceCreateNestedManyWithoutEmployeeInput
    company: companyCreateNestedOneWithoutEmployeeInput
    ticket?: ticketCreateNestedManyWithoutEmployeeInput
    snack?: snackCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateInput = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceUncheckedCreateNestedManyWithoutEmployeeInput
    ticket?: ticketUncheckedCreateNestedManyWithoutEmployeeInput
    snack?: snackUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUpdateInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUpdateManyWithoutEmployeeNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
    ticket?: ticketUpdateManyWithoutEmployeeNestedInput
    snack?: snackUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    code_company?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUncheckedUpdateManyWithoutEmployeeNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutEmployeeNestedInput
    snack?: snackUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeCreateManyInput = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
  }

  export type employeeUpdateManyMutationInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type employeeUncheckedUpdateManyInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    code_company?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketCreateInput = {
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    employee: employeeCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateInput = {
    id?: number
    code_employee: string
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type ticketUpdateInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: employeeUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketCreateManyInput = {
    id?: number
    code_employee: string
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type ticketUpdateManyMutationInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackCreateInput = {
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    employee: employeeCreateNestedOneWithoutSnackInput
  }

  export type snackUncheckedCreateInput = {
    id?: number
    code_employee: string
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type snackUpdateInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: employeeUpdateOneRequiredWithoutSnackNestedInput
  }

  export type snackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackCreateManyInput = {
    id?: number
    code_employee: string
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type snackUpdateManyMutationInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code_employee?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployeeScalarRelationFilter = {
    is?: employeeWhereInput
    isNot?: employeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type absenceCountOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    absence_date?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    certificate_absence?: SortOrder
  }

  export type absenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type absenceMaxOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    absence_date?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    certificate_absence?: SortOrder
  }

  export type absenceMinOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    absence_date?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    certificate_absence?: SortOrder
  }

  export type absenceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput
    some?: employeeWhereInput
    none?: employeeWhereInput
  }

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AbsenceListRelationFilter = {
    every?: absenceWhereInput
    some?: absenceWhereInput
    none?: absenceWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type TicketListRelationFilter = {
    every?: ticketWhereInput
    some?: ticketWhereInput
    none?: ticketWhereInput
  }

  export type SnackListRelationFilter = {
    every?: snackWhereInput
    some?: snackWhereInput
    none?: snackWhereInput
  }

  export type absenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type snackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeeCountOrderByAggregateInput = {
    code_employee?: SortOrder
    code_company?: SortOrder
    name?: SortOrder
    job_description?: SortOrder
    salary?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    enabled?: SortOrder
  }

  export type employeeAvgOrderByAggregateInput = {
    code_company?: SortOrder
    salary?: SortOrder
  }

  export type employeeMaxOrderByAggregateInput = {
    code_employee?: SortOrder
    code_company?: SortOrder
    name?: SortOrder
    job_description?: SortOrder
    salary?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    enabled?: SortOrder
  }

  export type employeeMinOrderByAggregateInput = {
    code_employee?: SortOrder
    code_company?: SortOrder
    name?: SortOrder
    job_description?: SortOrder
    salary?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
    enabled?: SortOrder
  }

  export type employeeSumOrderByAggregateInput = {
    code_company?: SortOrder
    salary?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type snackCountOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type snackAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type snackMaxOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type snackMinOrderByAggregateInput = {
    id?: SortOrder
    code_employee?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type snackSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_modified?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type employeeCreateNestedOneWithoutAbsenceInput = {
    create?: XOR<employeeCreateWithoutAbsenceInput, employeeUncheckedCreateWithoutAbsenceInput>
    connectOrCreate?: employeeCreateOrConnectWithoutAbsenceInput
    connect?: employeeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type employeeUpdateOneRequiredWithoutAbsenceNestedInput = {
    create?: XOR<employeeCreateWithoutAbsenceInput, employeeUncheckedCreateWithoutAbsenceInput>
    connectOrCreate?: employeeCreateOrConnectWithoutAbsenceInput
    upsert?: employeeUpsertWithoutAbsenceInput
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutAbsenceInput, employeeUpdateWithoutAbsenceInput>, employeeUncheckedUpdateWithoutAbsenceInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type employeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type employeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type employeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type employeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type absenceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput> | absenceCreateWithoutEmployeeInput[] | absenceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: absenceCreateOrConnectWithoutEmployeeInput | absenceCreateOrConnectWithoutEmployeeInput[]
    createMany?: absenceCreateManyEmployeeInputEnvelope
    connect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput
    connect?: companyWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput> | ticketCreateWithoutEmployeeInput[] | ticketUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEmployeeInput | ticketCreateOrConnectWithoutEmployeeInput[]
    createMany?: ticketCreateManyEmployeeInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type snackCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput> | snackCreateWithoutEmployeeInput[] | snackUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: snackCreateOrConnectWithoutEmployeeInput | snackCreateOrConnectWithoutEmployeeInput[]
    createMany?: snackCreateManyEmployeeInputEnvelope
    connect?: snackWhereUniqueInput | snackWhereUniqueInput[]
  }

  export type absenceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput> | absenceCreateWithoutEmployeeInput[] | absenceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: absenceCreateOrConnectWithoutEmployeeInput | absenceCreateOrConnectWithoutEmployeeInput[]
    createMany?: absenceCreateManyEmployeeInputEnvelope
    connect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput> | ticketCreateWithoutEmployeeInput[] | ticketUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEmployeeInput | ticketCreateOrConnectWithoutEmployeeInput[]
    createMany?: ticketCreateManyEmployeeInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type snackUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput> | snackCreateWithoutEmployeeInput[] | snackUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: snackCreateOrConnectWithoutEmployeeInput | snackCreateOrConnectWithoutEmployeeInput[]
    createMany?: snackCreateManyEmployeeInputEnvelope
    connect?: snackWhereUniqueInput | snackWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type absenceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput> | absenceCreateWithoutEmployeeInput[] | absenceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: absenceCreateOrConnectWithoutEmployeeInput | absenceCreateOrConnectWithoutEmployeeInput[]
    upsert?: absenceUpsertWithWhereUniqueWithoutEmployeeInput | absenceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: absenceCreateManyEmployeeInputEnvelope
    set?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    disconnect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    delete?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    connect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    update?: absenceUpdateWithWhereUniqueWithoutEmployeeInput | absenceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: absenceUpdateManyWithWhereWithoutEmployeeInput | absenceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: absenceScalarWhereInput | absenceScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput
    upsert?: companyUpsertWithoutEmployeeInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutEmployeeInput, companyUpdateWithoutEmployeeInput>, companyUncheckedUpdateWithoutEmployeeInput>
  }

  export type ticketUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput> | ticketCreateWithoutEmployeeInput[] | ticketUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEmployeeInput | ticketCreateOrConnectWithoutEmployeeInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutEmployeeInput | ticketUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ticketCreateManyEmployeeInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutEmployeeInput | ticketUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutEmployeeInput | ticketUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type snackUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput> | snackCreateWithoutEmployeeInput[] | snackUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: snackCreateOrConnectWithoutEmployeeInput | snackCreateOrConnectWithoutEmployeeInput[]
    upsert?: snackUpsertWithWhereUniqueWithoutEmployeeInput | snackUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: snackCreateManyEmployeeInputEnvelope
    set?: snackWhereUniqueInput | snackWhereUniqueInput[]
    disconnect?: snackWhereUniqueInput | snackWhereUniqueInput[]
    delete?: snackWhereUniqueInput | snackWhereUniqueInput[]
    connect?: snackWhereUniqueInput | snackWhereUniqueInput[]
    update?: snackUpdateWithWhereUniqueWithoutEmployeeInput | snackUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: snackUpdateManyWithWhereWithoutEmployeeInput | snackUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: snackScalarWhereInput | snackScalarWhereInput[]
  }

  export type absenceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput> | absenceCreateWithoutEmployeeInput[] | absenceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: absenceCreateOrConnectWithoutEmployeeInput | absenceCreateOrConnectWithoutEmployeeInput[]
    upsert?: absenceUpsertWithWhereUniqueWithoutEmployeeInput | absenceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: absenceCreateManyEmployeeInputEnvelope
    set?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    disconnect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    delete?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    connect?: absenceWhereUniqueInput | absenceWhereUniqueInput[]
    update?: absenceUpdateWithWhereUniqueWithoutEmployeeInput | absenceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: absenceUpdateManyWithWhereWithoutEmployeeInput | absenceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: absenceScalarWhereInput | absenceScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput> | ticketCreateWithoutEmployeeInput[] | ticketUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutEmployeeInput | ticketCreateOrConnectWithoutEmployeeInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutEmployeeInput | ticketUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ticketCreateManyEmployeeInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutEmployeeInput | ticketUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutEmployeeInput | ticketUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type snackUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput> | snackCreateWithoutEmployeeInput[] | snackUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: snackCreateOrConnectWithoutEmployeeInput | snackCreateOrConnectWithoutEmployeeInput[]
    upsert?: snackUpsertWithWhereUniqueWithoutEmployeeInput | snackUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: snackCreateManyEmployeeInputEnvelope
    set?: snackWhereUniqueInput | snackWhereUniqueInput[]
    disconnect?: snackWhereUniqueInput | snackWhereUniqueInput[]
    delete?: snackWhereUniqueInput | snackWhereUniqueInput[]
    connect?: snackWhereUniqueInput | snackWhereUniqueInput[]
    update?: snackUpdateWithWhereUniqueWithoutEmployeeInput | snackUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: snackUpdateManyWithWhereWithoutEmployeeInput | snackUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: snackScalarWhereInput | snackScalarWhereInput[]
  }

  export type employeeCreateNestedOneWithoutTicketInput = {
    create?: XOR<employeeCreateWithoutTicketInput, employeeUncheckedCreateWithoutTicketInput>
    connectOrCreate?: employeeCreateOrConnectWithoutTicketInput
    connect?: employeeWhereUniqueInput
  }

  export type employeeUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<employeeCreateWithoutTicketInput, employeeUncheckedCreateWithoutTicketInput>
    connectOrCreate?: employeeCreateOrConnectWithoutTicketInput
    upsert?: employeeUpsertWithoutTicketInput
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutTicketInput, employeeUpdateWithoutTicketInput>, employeeUncheckedUpdateWithoutTicketInput>
  }

  export type employeeCreateNestedOneWithoutSnackInput = {
    create?: XOR<employeeCreateWithoutSnackInput, employeeUncheckedCreateWithoutSnackInput>
    connectOrCreate?: employeeCreateOrConnectWithoutSnackInput
    connect?: employeeWhereUniqueInput
  }

  export type employeeUpdateOneRequiredWithoutSnackNestedInput = {
    create?: XOR<employeeCreateWithoutSnackInput, employeeUncheckedCreateWithoutSnackInput>
    connectOrCreate?: employeeCreateOrConnectWithoutSnackInput
    upsert?: employeeUpsertWithoutSnackInput
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutSnackInput, employeeUpdateWithoutSnackInput>, employeeUncheckedUpdateWithoutSnackInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type employeeCreateWithoutAbsenceInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    company: companyCreateNestedOneWithoutEmployeeInput
    ticket?: ticketCreateNestedManyWithoutEmployeeInput
    snack?: snackCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutAbsenceInput = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    ticket?: ticketUncheckedCreateNestedManyWithoutEmployeeInput
    snack?: snackUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeCreateOrConnectWithoutAbsenceInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutAbsenceInput, employeeUncheckedCreateWithoutAbsenceInput>
  }

  export type employeeUpsertWithoutAbsenceInput = {
    update: XOR<employeeUpdateWithoutAbsenceInput, employeeUncheckedUpdateWithoutAbsenceInput>
    create: XOR<employeeCreateWithoutAbsenceInput, employeeUncheckedCreateWithoutAbsenceInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutAbsenceInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutAbsenceInput, employeeUncheckedUpdateWithoutAbsenceInput>
  }

  export type employeeUpdateWithoutAbsenceInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
    ticket?: ticketUpdateManyWithoutEmployeeNestedInput
    snack?: snackUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutAbsenceInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    code_company?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    ticket?: ticketUncheckedUpdateManyWithoutEmployeeNestedInput
    snack?: snackUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeCreateWithoutCompanyInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceCreateNestedManyWithoutEmployeeInput
    ticket?: ticketCreateNestedManyWithoutEmployeeInput
    snack?: snackCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutCompanyInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceUncheckedCreateNestedManyWithoutEmployeeInput
    ticket?: ticketUncheckedCreateNestedManyWithoutEmployeeInput
    snack?: snackUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeCreateOrConnectWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
  }

  export type employeeCreateManyCompanyInputEnvelope = {
    data: employeeCreateManyCompanyInput | employeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type employeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>
  }

  export type employeeUpdateManyWithWhereWithoutCompanyInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[]
    OR?: employeeScalarWhereInput[]
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[]
    code_employee?: StringFilter<"employee"> | string
    code_company?: IntFilter<"employee"> | number
    name?: StringFilter<"employee"> | string
    job_description?: StringFilter<"employee"> | string
    salary?: DecimalFilter<"employee"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"employee"> | Date | string
    last_modified?: DateTimeNullableFilter<"employee"> | Date | string | null
    enabled?: BoolFilter<"employee"> | boolean
  }

  export type absenceCreateWithoutEmployeeInput = {
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
  }

  export type absenceUncheckedCreateWithoutEmployeeInput = {
    id?: number
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
  }

  export type absenceCreateOrConnectWithoutEmployeeInput = {
    where: absenceWhereUniqueInput
    create: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput>
  }

  export type absenceCreateManyEmployeeInputEnvelope = {
    data: absenceCreateManyEmployeeInput | absenceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutEmployeeInput = {
    name: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type companyUncheckedCreateWithoutEmployeeInput = {
    id?: number
    name: string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type companyCreateOrConnectWithoutEmployeeInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
  }

  export type ticketCreateWithoutEmployeeInput = {
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type ticketUncheckedCreateWithoutEmployeeInput = {
    id?: number
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type ticketCreateOrConnectWithoutEmployeeInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput>
  }

  export type ticketCreateManyEmployeeInputEnvelope = {
    data: ticketCreateManyEmployeeInput | ticketCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type snackCreateWithoutEmployeeInput = {
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type snackUncheckedCreateWithoutEmployeeInput = {
    id?: number
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type snackCreateOrConnectWithoutEmployeeInput = {
    where: snackWhereUniqueInput
    create: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput>
  }

  export type snackCreateManyEmployeeInputEnvelope = {
    data: snackCreateManyEmployeeInput | snackCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type absenceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: absenceWhereUniqueInput
    update: XOR<absenceUpdateWithoutEmployeeInput, absenceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<absenceCreateWithoutEmployeeInput, absenceUncheckedCreateWithoutEmployeeInput>
  }

  export type absenceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: absenceWhereUniqueInput
    data: XOR<absenceUpdateWithoutEmployeeInput, absenceUncheckedUpdateWithoutEmployeeInput>
  }

  export type absenceUpdateManyWithWhereWithoutEmployeeInput = {
    where: absenceScalarWhereInput
    data: XOR<absenceUpdateManyMutationInput, absenceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type absenceScalarWhereInput = {
    AND?: absenceScalarWhereInput | absenceScalarWhereInput[]
    OR?: absenceScalarWhereInput[]
    NOT?: absenceScalarWhereInput | absenceScalarWhereInput[]
    id?: IntFilter<"absence"> | number
    code_employee?: StringFilter<"absence"> | string
    absence_date?: DateTimeFilter<"absence"> | Date | string
    created_at?: DateTimeFilter<"absence"> | Date | string
    last_modified?: DateTimeNullableFilter<"absence"> | Date | string | null
    certificate_absence?: BoolFilter<"absence"> | boolean
  }

  export type companyUpsertWithoutEmployeeInput = {
    update: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>
  }

  export type companyUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutEmployeeInput, ticketUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ticketCreateWithoutEmployeeInput, ticketUncheckedCreateWithoutEmployeeInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutEmployeeInput, ticketUncheckedUpdateWithoutEmployeeInput>
  }

  export type ticketUpdateManyWithWhereWithoutEmployeeInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[]
    OR?: ticketScalarWhereInput[]
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[]
    id?: IntFilter<"ticket"> | number
    code_employee?: StringFilter<"ticket"> | string
    value?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"ticket"> | Date | string
    last_modified?: DateTimeNullableFilter<"ticket"> | Date | string | null
  }

  export type snackUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: snackWhereUniqueInput
    update: XOR<snackUpdateWithoutEmployeeInput, snackUncheckedUpdateWithoutEmployeeInput>
    create: XOR<snackCreateWithoutEmployeeInput, snackUncheckedCreateWithoutEmployeeInput>
  }

  export type snackUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: snackWhereUniqueInput
    data: XOR<snackUpdateWithoutEmployeeInput, snackUncheckedUpdateWithoutEmployeeInput>
  }

  export type snackUpdateManyWithWhereWithoutEmployeeInput = {
    where: snackScalarWhereInput
    data: XOR<snackUpdateManyMutationInput, snackUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type snackScalarWhereInput = {
    AND?: snackScalarWhereInput | snackScalarWhereInput[]
    OR?: snackScalarWhereInput[]
    NOT?: snackScalarWhereInput | snackScalarWhereInput[]
    id?: IntFilter<"snack"> | number
    code_employee?: StringFilter<"snack"> | string
    value?: DecimalFilter<"snack"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"snack"> | Date | string
    last_modified?: DateTimeNullableFilter<"snack"> | Date | string | null
  }

  export type employeeCreateWithoutTicketInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceCreateNestedManyWithoutEmployeeInput
    company: companyCreateNestedOneWithoutEmployeeInput
    snack?: snackCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutTicketInput = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceUncheckedCreateNestedManyWithoutEmployeeInput
    snack?: snackUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeCreateOrConnectWithoutTicketInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutTicketInput, employeeUncheckedCreateWithoutTicketInput>
  }

  export type employeeUpsertWithoutTicketInput = {
    update: XOR<employeeUpdateWithoutTicketInput, employeeUncheckedUpdateWithoutTicketInput>
    create: XOR<employeeCreateWithoutTicketInput, employeeUncheckedCreateWithoutTicketInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutTicketInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutTicketInput, employeeUncheckedUpdateWithoutTicketInput>
  }

  export type employeeUpdateWithoutTicketInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUpdateManyWithoutEmployeeNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
    snack?: snackUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutTicketInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    code_company?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUncheckedUpdateManyWithoutEmployeeNestedInput
    snack?: snackUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeCreateWithoutSnackInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceCreateNestedManyWithoutEmployeeInput
    company: companyCreateNestedOneWithoutEmployeeInput
    ticket?: ticketCreateNestedManyWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutSnackInput = {
    code_employee: string
    code_company: number
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
    absence?: absenceUncheckedCreateNestedManyWithoutEmployeeInput
    ticket?: ticketUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeeCreateOrConnectWithoutSnackInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutSnackInput, employeeUncheckedCreateWithoutSnackInput>
  }

  export type employeeUpsertWithoutSnackInput = {
    update: XOR<employeeUpdateWithoutSnackInput, employeeUncheckedUpdateWithoutSnackInput>
    create: XOR<employeeCreateWithoutSnackInput, employeeUncheckedCreateWithoutSnackInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutSnackInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutSnackInput, employeeUncheckedUpdateWithoutSnackInput>
  }

  export type employeeUpdateWithoutSnackInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUpdateManyWithoutEmployeeNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
    ticket?: ticketUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutSnackInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    code_company?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUncheckedUpdateManyWithoutEmployeeNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeCreateManyCompanyInput = {
    code_employee: string
    name: string
    job_description: string
    salary: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
    enabled: boolean
  }

  export type employeeUpdateWithoutCompanyInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUpdateManyWithoutEmployeeNestedInput
    ticket?: ticketUpdateManyWithoutEmployeeNestedInput
    snack?: snackUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutCompanyInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    absence?: absenceUncheckedUpdateManyWithoutEmployeeNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutEmployeeNestedInput
    snack?: snackUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutCompanyInput = {
    code_employee?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absenceCreateManyEmployeeInput = {
    id?: number
    absence_date: Date | string
    created_at?: Date | string
    last_modified?: Date | string | null
    certificate_absence: boolean
  }

  export type ticketCreateManyEmployeeInput = {
    id?: number
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type snackCreateManyEmployeeInput = {
    id?: number
    value: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_modified?: Date | string | null
  }

  export type absenceUpdateWithoutEmployeeInput = {
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absenceUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absenceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    absence_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificate_absence?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketUpdateWithoutEmployeeInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackUpdateWithoutEmployeeInput = {
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snackUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}